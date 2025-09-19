export default function Integrantes() {
  const equipe = ["Maria Silva", "João Pereira", "Ana Costa", "Carlos Souza"];

  return (
    <div>
      <h1>Equipe do Projeto</h1>
      <ul>
        {equipe.map((nome, i) => (
          <li key={i}>{nome}</li>
        ))}
      </ul>
    </div>
  );
}
