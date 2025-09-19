import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Paginas/Navegbarra";
import Footer from "./Paginas/Footer";

import Home from "./Paginas/Home";
import Consulta from "./Paginas/Consulta";
import Contato from "./Paginas/Contato";
import Dispositivos from "./Paginas/Dispositivos";
import FAQ from "./Paginas/Faq";
import Integrantes from "./Paginas/Integrantes";
import Login from "./Paginas/Login";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-gradient-to-br from-green-200 to-green-400">
        <Navbar />
        <main className="flex-1 pt-20 px-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consulta" element={<Consulta />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/dispositivos" element={<Dispositivos />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/integrantes" element={<Integrantes />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
