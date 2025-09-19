import Card from "./Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-16 px-6">
      <section className="text-center mb-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Seja bem-vindo ao Guia HC
        </h2>
        <p className="text-gray-700">
          Escolha abaixo a opção que deseja acessar:
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          titulo="Consulta Online"
          descricao="Agende suas consultas de forma rápida e segura."
          to="/consulta"
        />
        <Card
          titulo="Contato"
          descricao="Entre em contato com nossa equipe de suporte."
          to="/contato"
        />
        <Card
          titulo="Teste seu dispositivo"
          descricao="Gerencie seus dispositivos vinculados ao portal."
          to="/dispositivos"
        />
        <Card
          titulo="Perguntas Frequentes"
          descricao="Encontre respostas para as principais dúvidas."
          to="/faq"
        />
      </div>
    </div>
  );
}
