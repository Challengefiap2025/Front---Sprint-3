import { Link } from "react-router-dom";

type CardProps = {
  titulo: string;
  descricao: string;
  to: string;
};

export default function Card({ titulo, descricao, to }: CardProps) {
  return (
    <Link to={to} className="block">
      <div className="bg-white rounded-lg shadow-md p-6 w-full max-w-md text-center hover:shadow-lg hover:-translate-y-1 transition">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{titulo}</h3>
        <p className="text-gray-700">{descricao}</p>
      </div>
    </Link>
  );
}
