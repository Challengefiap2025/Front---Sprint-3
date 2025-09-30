import { useState } from "react";

export default function Consulta() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const [data, setData] = useState("");
  const [hora, setHora] = useState("");
  const [confirmacao, setConfirmacao] = useState("");

  // validar CPF
  const validarCPF = (cpf: string) => {
    cpf = cpf.replace(/\D/g, ""); 
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;
    

    let soma = 0;
    for (let i = 0; i < 9; i++) soma += parseInt(cpf[i]) * (10 - i);
    let resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    if (resto !== parseInt(cpf[9])) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) soma += parseInt(cpf[i]) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10) resto = 0;
    return resto === parseInt(cpf[10]);
  };

  // Converte de "2025-09-25" para "25/09/2025"
  const formatarData = (dataISO: string) => {
  const [ano, mes, dia] = dataISO.split("-");
  return `${dia}/${mes}/${ano}`;
};

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // validação do CPF antes de confirmar
    if (!validarCPF(cpf)) {
      alert("CPF inválido. Digite um CPF válido com 11 dígitos.");
      return;
    }
    setConfirmacao(
      `Consulta marcada para ${nome} - ${especialidade} em ${formatarData(data)} às ${hora}`
    );

    // limpa os campos
    setNome("");
    setCpf("");
    setEspecialidade("");
    setData("");
    setHora("");
  };

  return (
    <div className="flex flex-col items-center pt-24 px-4">
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-bold text-sky-800/85 mb-2 text-center">
          Agende sua Consulta
        </h2>
        <p className="text-gray-600 text-center mb-6">
          Preencha os dados abaixo para confirmar seu agendamento.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-medium text-sm text-gray-700">
              Nome do Paciente
            </label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Digite seu nome"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              required/>         
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">
              CPF
            </label>
            <input
              type="text"
              value={cpf}
              onChange={(e) => {
                const apenasNumeros = e.target.value.replace(/\D/g, "").slice(0, 11);
                setCpf(apenasNumeros);
              }}
              placeholder="000.000.000-00"
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              required/>            
          </div>

          <div>
            <label className="block font-medium text-sm text-gray-700">
              Especialidade
            </label>
            <select
              value={especialidade}
              onChange={(e) => setEspecialidade(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              required>
              <option value="" disabled>Selecione</option>                                        
              <option value="Cardiologia">Cardiologia</option>
              <option value="Dermatologia">Dermatologia</option>
              <option value="Pediatria">Pediatria</option>
              <option value="Ortopedia">Ortopedia</option>
              <option value="Ginecologia">Ginecologia</option>
              <option value="Neurologia">Neurologia</option>
              <option value="Psiquiatria">Psiquiatria</option>
              <option value="Oftalmologia">Oftalmologia</option>
            </select>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block font-medium text-sm text-gray-700">
                Data
              </label>
              <input
                type="date"
                value={data}
                onChange={(e) => setData(e.target.value)}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                required/>              
            </div>

            <div className="flex-1">
              <label className="block font-medium text-sm text-gray-800">
                Horário
              </label>
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
                step="900"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
                required/>                             
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-sky-600 text-white py-2 rounded hover:bg-blue-700 transition">
            Confirmar Consulta
          </button>
        </form>

        {confirmacao && (
          <p className="mt-4 text-green-600 font-medium text-center">
            {confirmacao}
          </p>
        )}
      </section>
    </div>
  );
}
