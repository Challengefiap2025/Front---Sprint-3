import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="bg-blue-700 fixed top-0 left-0 right-0 shadow-md z-50">
      <nav className="max-w-7xl mx-auto px-6">
        <ul className="flex gap-8 py-4 text-white font-medium">
          <li><Link to="/" className="hover:text-gray-200 transition">Home</Link></li>
          <li><Link to="/consulta" className="hover:text-gray-200 transition">Consulta</Link></li>
          <li><Link to="/contato" className="hover:text-gray-200 transition">Contato</Link></li>
          <li><Link to="/dispositivos" className="hover:text-gray-200 transition">Dispositivos</Link></li>
          <li><Link to="/faq" className="hover:text-gray-200 transition">FAQ</Link></li>
          <li><Link to="/integrantes" className="hover:text-gray-200 transition">Integrantes</Link></li>
          <li><Link to="/login" className="hover:text-gray-200 transition">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}
