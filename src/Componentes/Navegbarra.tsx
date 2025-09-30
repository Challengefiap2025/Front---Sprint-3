import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navegbar() {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-sky-700/75 text-gray-300 py-4 shadow-md fixed top-0 w-full z-50">
      <nav className="max-w-8xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-bold">Guia HC</h1>
        <ul className="hidden md:flex gap-6 font-medium">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/dispositivos" className="hover:underline">Teste</Link></li>
          <li><Link to="/consulta" className="hover:underline">Consulta</Link></li>
          <li><Link to="/contato" className="hover:underline">Integrantes</Link></li>
          <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
          <li><Link to="/sobre" className="hover:underline">Sobre</Link></li>
        </ul>
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuAberto(!menuAberto)}>
          ☰
        </button>
      </nav>
      {menuAberto && (
        <div className="md:hidden bg-sky-800/90 px-6 py-4 flex flex-col gap-4 font-medium">
          <Link to="/" onClick={() => setMenuAberto(false)}>Home</Link>
          <Link to="/dispositivos" onClick={() => setMenuAberto(false)}>Teste</Link>
          <Link to="/consulta" onClick={() => setMenuAberto(false)}>Consulta</Link>
          <Link to="/contato" onClick={() => setMenuAberto(false)}>Integrantes</Link>
          <Link to="/faq" onClick={() => setMenuAberto(false)}>FAQ</Link>
          <Link to="/sobre" onClick={() => setMenuAberto(false)}>Sobre</Link>
        </div>
      )}
    </header>
  );
}
