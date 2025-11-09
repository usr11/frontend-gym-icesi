import { Link } from "react-router-dom";

const ExerciseCard = ({ exercise, lessInfo }) => {
  if (!exercise) return null;
  const { id, name, urlImg, difficulty, isPredefined, createdBy } = exercise;
  // id para la redireccion

  return (
    <div className="border-2 border-primary h-90 rounded-md hover:translate-y-2 transition-all ease-out duration-150 bg-background">
      <div className="relative bg-primary/10 w-full h-1/2 rounded-t-sm overflow-hidden">
        <img
          src={urlImg}
          alt="exerciseImg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="pt-7 px-4 flex flex-col gap-3">
        <h3 className="text-xl mb-2">{name}</h3>
        <div className="flex flex-col">
          <p className="text-md">
            Dificultad:
            <span className="text-sm"> {difficulty}</span>
          </p>
          {!lessInfo ? (
            <p className="text-md">
              Creada por:
              <span className="text-sm"> {createdBy}</span>
            </p>
          ) : (
            <p className="text-md hover:underline hover:cursor-pointer">Ver progreso</p>
          )}

          <div className="flex mt-2">
            <p className={isPredefined ? "text-green-500" : "text-red-500"}>
              {isPredefined ? "Predefinido" : "No predefinido"}
            </p>
            <div className=" ml-auto">
              <Link className="text-md hover:underline" to={"#"}>
                Ver detalles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
