import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-sky-700/75 text-gray-300 py-4 shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-8xl mx-auto flex justify-between px-6">
        <h1 className="text-2xl font-bold">Guia HC</h1>
        <ul className="flex gap-6 font-medium">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/dispositivos" className="hover:underline">Teste</Link></li>
          <li><Link to="/consulta" className="hover:underline">Consulta</Link></li>
          <li><Link to="/contato" className="hover:underline">Contato</Link></li>
          <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
        </ul>
      </nav>
    </header>
  );
}
