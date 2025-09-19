import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navegacao";

import Home from "./Home";
import Consulta from "./Consulta";
import Contato from "./Contato";
import Dispositivos from "./Dispositivos";
import FAQ from "./FAQ";
import Integrantes from "./Integrantes";
import Login from "./Login";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* adiciona espaço para não ficar escondido atrás da navbar */}
      <div className="pt-16 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/consulta" element={<Consulta />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/dispositivos" element={<Dispositivos />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export function Queijo() {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
      <h1 className="text-5xl font-bold text-white">
        Tailwind funcionando 🚀
      </h1>
    </div>
  );
}
