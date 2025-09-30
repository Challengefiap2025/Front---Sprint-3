import Card from "../Componentes/Card";

export default function Home() {
  return (
    <div className="flex flex-col items-center pt-16 px-6">
      <section className="text-center mb-8">
        <h2 className="text-4xl font-bold text-black-500 mb-4">
          Seja bem-vindo ao Guia HC
        </h2>
        <p className="text-gray-700">
          Escolha abaixo a opção que deseja acessar:
        </p>
      </section>

      <div className="w-full max-w-4xl mb-8" />
        <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-6xl mb-8">
          <h3 className="text-2xl font-semibold text-sky-800/85 mb-4 text-center">
          Estamos aqui para você
          </h3>
          <p className="text-gray-600 text-center">
          No Guia HC, nosso objetivo é facilitar o acesso aos serviços de saúde, proporcionando uma experiência simples e eficiente para agendar suas consultas, conhecer nossa equipe dedicada, testar seu dispositivo e encontrar respostas para suas dúvidas frequentes.
          </p>
        </section>

      <div className="grid md:grid-cols-2 gap-6">
        <Card
          titulo="Agendar consulta Online"
          descricao="Agende suas consultas de forma rápida e segura."
          to="/consulta"/>

        <Card
          titulo="Integrantes"
          descricao="Conheça nossa equipe de suporte."
          to="/contato"/>  

        <Card
          titulo="Teste seu dispositivo"
          descricao="Teste seu dispositivo antes da consulta."
          to="/dispositivos"/>
                  
        <Card
          titulo="Perguntas Frequentes"
          descricao="Encontre respostas para as principais dúvidas."
          to="/faq"/>


// falta centralizar o card 
        <Card
          titulo="Sobre a Solução"
          descricao="Saiba mais sobre o Guia HC e seus benefícios."
          to="/sobre"/>
    
      </div>
    </div>
  );
}