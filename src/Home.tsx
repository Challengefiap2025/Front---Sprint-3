import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo ao Portal</h1>
      <p>Escolha uma das páginas abaixo:</p>

      <nav>
        <ul>
          <li><Link to="/consulta">Consulta</Link></li>
          <li><Link to="/contato">Contato</Link></li>
          <li><Link to="/dispositivos">Dispositivos</Link></li>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/integrantes">Integrantes</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </div>
  );
}
