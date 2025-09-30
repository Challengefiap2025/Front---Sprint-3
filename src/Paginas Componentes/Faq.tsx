import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

type FormInputs = {
  nome: string;
  email: string;
  celular?: string;
};

export default function Faq() {
  const [aberta, setAberta] = useState<number | null>(null);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
  const [mensagem, setMensagem] = useState<string>("");

  const perguntas = [
    {
      titulo: "📅 Como remarcar ou cancelar uma consulta?",
      resposta:
        "Você pode remarcar ou cancelar sua consulta acessando a seção “Consulta Online” e escolhendo uma nova data/hora disponível.",
    },
    {
      titulo: "💻 Quais dispositivos posso usar para a consulta remota?",
      resposta:
        "Você pode usar computadores, tablets ou smartphones com conexão à internet e um navegador atualizado.",
    },
    {
      titulo: "🎥 O que faço se a videochamada não funcionar?",
      resposta:
        "Verifique sua conexão de internet, reinicie o dispositivo e se o problema persistir, entre em contato com o suporte.",
    },
    {
      titulo: "🗓️ Como faço para agendar uma consulta online?",
      resposta:
        "Você pode agendar sua consulta pelo portal, acessando a seção “Consulta Online” e seguindo os passos indicados.",
    },
  ];

  const toggle = (index: number) => {
    setAberta(aberta === index ? null : index);
  };

  const onSubmit = (data: FormInputs) => {
    setMensagem(`✅ Obrigado ${data.nome}, em breve entraremos em contato no email informado`);
    reset();
  };

  return (
    <div className="flex flex-col items-center pt-24 px-4">
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-sky-800/85 mb-6 text-center">
          Perguntas Frequentes (FAQ)
        </h2>

        <div className="space-y-3">
          {perguntas.map((item, index) => (
            <div key={index} className="border-b pb-2">
              <button
                onClick={() => toggle(index)}
                className="w-full text-left font-semibold text-lg text-blue-900 hover:text-cyan-600 transition">
                {item.titulo}
              </button>
              {aberta === index && (
                <p className="mt-2 text-gray-700">{item.resposta}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
             Ainda tem dúvidas? Envie sua pergunta:
          </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Nome completo"
                {...register("nome", { required: "O nome é obrigatório" })}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
              {errors.nome && <p className="text-red-500 text-sm">{errors.nome.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Seu email"
                {...register("email", {
                  required: "O email é obrigatório",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Email inválido",
                  },
                })}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="text"
                placeholder="Número de celular (opcional)"
                {...register("celular")}
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-blue-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
              Enviar
            </button>
          </form>

          {mensagem && (
            <p className="mt-4 text-green-600 font-medium text-center">{mensagem}</p>
          )}
        </div>

        <div className="mt-6 text-center">
          <p className="mb-2 text-gray-700">Ou se preferir:</p>
          <Link
            to="/contato"
            className="text-blue-500 hover:underline font-medium">
            Clique aqui para falar com o suporte
          </Link>
        </div>
      </section>
    </div>
  );
}
