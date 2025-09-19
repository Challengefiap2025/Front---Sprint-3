import { useState } from "react";

export default function Contato() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Mensagem enviada por ${nome} (${email}): ${mensagem}`);
  }

  return (
    <div>
      <h1>Contato</h1>
      <form onSubmit={handleSubmit}>
        <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome" />
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <textarea value={mensagem} onChange={(e) => setMensagem(e.target.value)} placeholder="Mensagem" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
