export default function Dispositivos() {
  const dispositivos = ["Computador", "Tablet", "Smartphone"];

  return (
    <div>
      <h1>Dispositivos Compatíveis</h1>
      <ul>
        {dispositivos.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </div>
  );
}
