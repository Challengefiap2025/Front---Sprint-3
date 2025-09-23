import { useEffect, useRef, useState } from "react";

export default function TesteDispositivo() {
  // Câmera
  const videoReferencia = useRef<HTMLVideoElement | null>(null);
  const fluxoCamera = useRef<MediaStream | null>(null);
  const [cameraLigada, setCameraLigada] = useState(false);
  const [erroCamera, setErroCamera] = useState<string | null>(null);

  // Microfone
  const [microfoneLigado, setMicrofoneLigado] = useState(false);
  const [nivelMicrofone, setNivelMicrofone] = useState(0);
  const fluxoMicrofone = useRef<MediaStream | null>(null);
  const contextoAudio = useRef<AudioContext | null>(null);
  const analisador = useRef<AnalyserNode | null>(null);
  const animacaoRef = useRef<number | null>(null);

  // câmera
  const iniciarCamera = async () => {
    setErroCamera(null);
    try {
      const fluxo = await navigator.mediaDevices.getUserMedia({ video: true });
      fluxoCamera.current = fluxo;
      if (videoReferencia.current) {
        videoReferencia.current.srcObject = fluxo;
        await videoReferencia.current.play().catch(() => {});
      }
      setCameraLigada(true);
    } catch (err: any) {
      setErroCamera(err?.message || "Erro ao acessar câmera");
      setCameraLigada(false);
    }
  };

  const pararCamera = () => {
    fluxoCamera.current?.getTracks().forEach((t) => t.stop());
    fluxoCamera.current = null;
    if (videoReferencia.current) videoReferencia.current.srcObject = null;
    setCameraLigada(false);
  };

  //  microfone
  const iniciarMicrofone = async () => {
    try {
      const fluxo = await navigator.mediaDevices.getUserMedia({ audio: true });
      fluxoMicrofone.current = fluxo;

      contextoAudio.current = new (window.AudioContext ||
        (window as any).webkitAudioContext)();
      const fonte = contextoAudio.current.createMediaStreamSource(fluxo);
      const analise = contextoAudio.current.createAnalyser();
      analise.fftSize = 2048;
      fonte.connect(analise);
      analisador.current = analise;

      const dados = new Uint8Array(analise.frequencyBinCount);
      const loop = () => {
        analise.getByteTimeDomainData(dados);
        let soma = 0;
        for (let i = 0; i < dados.length; i++) {
          const v = (dados[i] - 128) / 128;
          soma += v * v;
        }
        const rms = Math.sqrt(soma / dados.length);
        setNivelMicrofone(Math.min(1, rms * 1.4));
        animacaoRef.current = requestAnimationFrame(loop);
      };
      animacaoRef.current = requestAnimationFrame(loop);
      setMicrofoneLigado(true);
    } catch (err: any) {
      console.error(err);
      setMicrofoneLigado(false);
    }
  };

  const pararMicrofone = () => {
    if (animacaoRef.current) cancelAnimationFrame(animacaoRef.current);
    analisador.current = null;
    contextoAudio.current?.close().catch(() => {});
    contextoAudio.current = null;
    fluxoMicrofone.current?.getTracks().forEach((t) => t.stop());
    fluxoMicrofone.current = null;
    setMicrofoneLigado(false);
    setNivelMicrofone(0);
  };

  useEffect(() => {
    return () => {
      pararCamera();
      pararMicrofone();
    };
  }, []);

  return (
    <div className="flex flex-col items-center pt-24 px-4">
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-sky-800/85 mb-4 text-center">
          Teste de Dispositivo
        </h2>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Câmera</h3>
          <div className="flex gap-4 items-center flex-col md:flex-row">
            <div className="w-40 h-32 sm:w-48 sm:h-36 md:w-64 md:h-48 bg-gray-100 border rounded overflow-hidden">
              <video
                ref={videoReferencia}
                className="w-full h-full object-cover"
                muted
                playsInline
              />
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              {!cameraLigada ? (
                <button
                  onClick={iniciarCamera}
                  className="w-full md:w-auto bg-sky-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">                
                  Testar Câmera
                </button>
              ) : (
                <button
                  onClick={pararCamera}
                  className="w-full md:w-auto bg-red-600/45 text-white px-4 py-2 rounded hover:bg-red-700 transition">                
                  Parar Câmera
                </button>
              )}
              {erroCamera && (
                <p className="text-red-600 text-sm">{erroCamera}</p>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold mb-2">Microfone</h3>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <div className="w-full h-4 bg-gray-200 rounded overflow-hidden">
                <div
                  className="h-full bg-green-500 transition-all"
                  style={{ width: `${Math.min(100, nivelMicrofone * 100)}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-1">
                Fale para ver o nível do microfone.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-auto">
              {!microfoneLigado ? (
                <button
                  onClick={iniciarMicrofone}
                  className="w-full md:w-auto bg-sky-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">               
                  Testar Microfone
                </button>)
                 : (              
                <button
                  onClick={pararMicrofone}
                  className="w-full md:w-auto bg-red-600/45 text-white px-4 py-2 rounded hover:bg-red-700 transition">                
                  Parar Microfone
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="mb-6 text-center">
          <h3 className="font-semibold mb-2">Velocidade da Internet</h3>
          <p className="text-sm text-gray-600 mb-4">
            Clique abaixo para abrir um site confiável para testar sua conexão.
          </p>
          <a
            href="https://fast.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-sky-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">         
            Testar no Fast.com
          </a>
        </div>
      </section>
    </div>
  );
}
