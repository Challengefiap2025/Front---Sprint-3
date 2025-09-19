export default function Home() {
  return (
    <div className="text-center mt-12">
      <h1 className="text-4xl font-bold text-blue-700 mb-4">Bem-vindo ao Portal</h1>
      <p className="text-lg text-gray-700 mb-6">Escolha uma das páginas abaixo:</p>

      <ul className="flex flex-col items-center gap-3">
        <li><a href="/consulta" className="text-blue-600 hover:underline">Consulta</a></li>
        <li><a href="/contato" className="text-blue-600 hover:underline">Contato</a></li>
        <li><a href="/dispositivos" className="text-blue-600 hover:underline">Dispositivos</a></li>
        <li><a href="/faq" className="text-blue-600 hover:underline">FAQ</a></li>
        <li><a href="/integrantes" className="text-blue-600 hover:underline">Integrantes</a></li>
        <li><a href="/login" className="text-blue-600 hover:underline">Login</a></li>
      </ul>
    </div>
  );
}
