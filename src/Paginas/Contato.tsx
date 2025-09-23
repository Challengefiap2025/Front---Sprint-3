export default function Contato() {
  const contatos = [
    {
      nome: "Luis Guilherme Borges Silva",
      turma: "1TDSPK",
      rm: "RM566548 - Desenvolvedor Frontend e Data Science",
      github: "https://github.com/LuisGdev13",
    },
    {
      nome: "Gabriel Camargo Lopes",
      turma: "1TDSPK",
      rm: "RM564752 - Desenvolvedor Backend",
      github: "https://github.com/GabrielGCL7",
    },
    {
      nome: "Gabriel Garcia Mayo Delatore",
      turma: "1TDSPK",
      rm: "RM563298 - UI/UX Designer",
      github: "https://github.com/anacosta",
    },
  ];

  return (
    <div className="flex flex-col items-center pt-24 px-4">
      <section className="bg-white shadow-md rounded-lg p-6 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-sky-800/85 mb-6 text-center">
          Integrantes do Time
        </h2>

        <div className="grid gap-4">
          {contatos.map((pessoa, index) => (
            <div
              key={index}
              className="flex items-center justify-between border rounded p-4 hover:shadow-md transition"
            >
              <div>
                <h3 className="text-lg font-semibold">{pessoa.nome}</h3>
                <p className="text-gray-600">{pessoa.rm}</p>
              </div>
              <a
                href={pessoa.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:underline font-medium"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
