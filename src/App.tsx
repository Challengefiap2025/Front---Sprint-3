import { BrowserRouter, Routes, Route } from "react-router-dom";

// importando as páginas
import Home from "./Home";
import Consulta from "./Consulta";
import Contato from "./Contato";
import Dispositivos from "./Dispositivos";
import FAQ from "./Faq.tsx";
import Integrantes from "./Integrantes";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consulta" element={<Consulta />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/dispositivos" element={<Dispositivos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/integrantes" element={<Integrantes />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
