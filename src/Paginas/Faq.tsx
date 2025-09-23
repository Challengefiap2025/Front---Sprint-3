import { useState } from "react";
import { Link } from "react-router-dom";

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(null);

  const perguntas = [
    {
      titulo: "📅 Como remarcar ou cancelar uma consulta?",
      resposta:
        "Você pode remarcar ou cancelar sua consulta acessando a seção “Consulta Online” e escolhendo uma nova data/hora disponível.",
    },
    {
      titulo: "💻 Quais dispositivos posso usar para a consulta remota?",
      resposta:
        "Você pode usar computadores, tablets ou smartphones com conexão à internet e um navegador atualizado.",
    },
    {
      titulo: "🎥 O que faço se a videochamada não funcionar?",
      resposta:
        "Verifique sua conexão de internet, reinicie o dispositivo e, se o problema persistir, entre em contato com o suporte.",
    },
    {
      titulo: "🗓️ Como faço para agendar uma consulta online?",
      resposta:
        "Você pode agendar sua consulta pelo portal, acessando a seção “Consulta Online” e seguindo os passos indicados.",
    },
  ];

  const toggle = (index: number) => {
    setAberta(aberta === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center pt-24 px-4">
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center">
          Perguntas Frequentes (FAQ)
        </h2>

        <div className="space-y-3">
          {perguntas.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left font-semibold text-lg text-blue-900 hover:text-blue-600 transition">
                {item.titulo}
              </button>
              {aberta === index && (
                <p className="mt-2 text-gray-700">{item.resposta}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-center">
          <p className="mb-2 text-gray-700">❓ Não encontrou sua dúvida?</p>
          <Link
            to="/contato"
            className="text-blue-600 hover:underline font-medium">          
            Clique aqui para falar com o suporte
          </Link>
        </div>
      </section>
    </div>
  );
}
