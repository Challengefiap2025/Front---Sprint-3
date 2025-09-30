import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Componentes/Navegbarra";
import Footer from "./Componentes/Footer";

import Home from "./Paginas Componentes/Home";
import Consulta from "./Paginas Componentes/Consulta";
import Contato from "./Paginas Componentes/Integrantes";
import Dispositivos from "./Paginas Componentes/Dispositivos";
import FAQ from "./Paginas Componentes/Faq";
import Sobre from "./Paginas Componentes/Sobre";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-200/75 to-emerald-700/50">
        <Navbar />
        <main className="flex-1 pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulta" element={<Consulta />} />
            <Route path="/consulta/:id" element={<Consulta />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/dispositivos" element={<Dispositivos />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/sobre" element={<Sobre />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
