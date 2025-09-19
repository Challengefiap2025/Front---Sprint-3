export default function Integrantes() {
  const equipe = ["Gabriel Garcia", "Gabriel Camargo", "Luis Guilherme"];

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
