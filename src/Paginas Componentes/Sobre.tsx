export default function Sobre() {
  return (
    <div className="flex flex-col items-center pt-24 px-4">
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-sky-800/85 mb-6 text-center">
          Sobre a Solução
        </h2>

        <p className="text-gray-700 mb-4">
          O <strong>Guia HC</strong> é uma solução digital desenvolvida para 
          facilitar o agendamento e a realização de consultas online. 
          Nosso objetivo é oferecer uma experiência simples, acessível 
          e confiável para pacientes que precisam de atendimento remoto.
        </p>

        <p className="text-gray-700 mb-4">
          A plataforma permite que o paciente agende consultas de forma rápida, 
          teste seu dispositivo (câmera, microfone e conexão de internet) 
          antes da teleconsulta e tenha acesso a uma central de dúvidas (FAQ) 
          e suporte direto.
        </p>

        <p className="text-gray-700 mb-8">
          Dessa forma, o sistema contribui para reduzir barreiras tecnológicas 
          e garantir maior segurança e praticidade no atendimento médico online.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mb-4 text-center">
          🌟 Diferenciais da Solução
        </h3>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h4 className="font-semibold text-blue-800 mb-2"> Agendamento Rápido</h4>
            <p className="text-gray-700 text-sm">
              Marque consultas em poucos cliques, com especialidades disponíveis.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h4 className="font-semibold text-blue-800 mb-2"> Testes no Dispositivo</h4>
            <p className="text-gray-700 text-sm">
              Verifique câmera, microfone e conexão antes da teleconsulta.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h4 className="font-semibold text-blue-800 mb-2"> FAQ Interativo</h4>
            <p className="text-gray-700 text-sm">
              Tire dúvidas comuns rapidamente através de um FAQ organizado.
            </p>
          </div>
          <div className="border rounded-lg p-4 shadow hover:shadow-md transition">
            <h4 className="font-semibold text-blue-800 mb-2"> Suporte Direto</h4>
            <p className="text-gray-700 text-sm">
              Caso não encontre sua resposta, entre em contato de forma prática.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
