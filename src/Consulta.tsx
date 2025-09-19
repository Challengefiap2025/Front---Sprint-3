import { useState } from "react";

export default function Consulta() {
  const [passos] = useState([
    "Acesse o portal do paciente",
    "Faça login com CPF e senha",
    "Agende sua consulta",
    "Receba a confirmação"
  ]);

  return (
    <div>
      <h1>Como fazer uma consulta online</h1>
      <ol>
        {passos.map((p, i) => (
          <li key={i}>{p}</li>
        ))}
      </ol>
    </div>
  );
}
