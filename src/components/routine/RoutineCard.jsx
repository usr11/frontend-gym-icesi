import { Link } from "react-router-dom";

const RoutineCard = ({ routine, lessInfo }) => {
  if (!routine) return null;
  const { id, urlImg, name, isCertified, startDate, createdBy } = routine;

  // falta redireccion de ver detalles, con id

  return (
    <div className=" shadow-md h-90 rounded-md hover:translate-y-2 transition-all ease-out duration-150 bg-background">
      <div className="relative bg-primary/10 w-full h-1/2 rounded-t-sm overflow-hidden">
        <img
          src={urlImg}
          alt="routineImg"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="pt-7 px-4 flex flex-col gap-3">
        <h3 className="text-xl mb-2">{name}</h3>
        <div className="flex flex-col">
          <p className="text-md">
            {lessInfo ? "Creada por: " : "Fecha de inicio: "}
            <span className="text-sm">{lessInfo ? createdBy : startDate}</span>
          </p>
          {!lessInfo && (
            <p className="text-md">
              Dias activa:
              <span className="text-sm"> 10 dias</span>
            </p>
          )}

          <div className="flex mt-2">
            <p className={isCertified ? "text-green-500" : "text-red-500"}>
              {isCertified ? "Certificada" : "No certificada"}
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

export default RoutineCard;
