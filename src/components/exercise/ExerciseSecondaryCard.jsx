import { Link } from "react-router-dom";
import Button from "../ui/Button";

const ExerciseSecondaryCard = ({ exercise }) => {
  if (!exercise) return null;

  // id para redireccion
  // description y mas... para detalles
  const { id, name, createdBy, type, description } = exercise;

  return (
    <div className="flex flex-row  bg-green-300 h-30 p-5 border-2 border-primary rounded-md">
      <div className="my-auto">
        <h2 className="mb-3">{name}</h2>
        <p>
          Creado por: <span className="text-sm">{createdBy}</span>
        </p>
        <p>
          Tipo: <span className="text-sm">{type} </span>
        </p>
      </div>

      <div className="text-sm ml-auto my-auto mr-3">
        <Link className="hover:underline">Ver detalles</Link>
        <div className="pt-4">
          <Button>Agregar</Button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseSecondaryCard;
