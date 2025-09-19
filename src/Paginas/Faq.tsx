type PerguntaProps = {
  pergunta: string;
  resposta: string;
};

function Pergunta({ pergunta, resposta }: PerguntaProps) {
  return (
    <div>
      <h2>{pergunta}</h2>
      <p>{resposta}</p>
    </div>
  );
}

export default function FAQ() {
  return (
    <div>
      <h1>Perguntas Frequentes</h1>
      <Pergunta pergunta="Como faço login?" resposta="Use seu CPF e senha cadastrados." />
      <Pergunta pergunta="Posso remarcar a consulta?" resposta="Sim, na área de consultas." />
      <Pergunta pergunta="O serviço é gratuito?" resposta="Sim, para pacientes cadastrados." />
    </div>
  );
}
