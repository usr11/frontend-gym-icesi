import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const RoutineDetailScreen = () => {
  const { routineId } = useParams();
  const [routine, setRoutine] = useState({});

  useEffect(() => {
    const loadRoutine = () => {
      // const data = getRoutineDetails(routineId);
      // setRoutine(data);
    };

    loadRoutine();
  }, []);

  const routine1 = {
    id: "1",
    urlImg: "aaa",
    name: "Rutina 1",
    description: "Esta es una descripcion sencilla",
    isCertified: false,
    isPredefined: true,
    startDate: "12/03/2020",
    createdBy: "Juan",
  };

  const {
    id,
    urlImg,
    name,
    description,
    isCertified,
    isPredefined,
    startDate,
    createdBy,
  } = routine1;

  return (
    <div className="flex p-15 bg-background rounded-md shadow-md">
      <div>
        <div  className="flex">
          <div>
            <h2 className="text-2xl font-semibold mb-4 text-primary">{name}</h2>
            <img
              src={urlImg}
              alt={name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-gray-700 mb-2">
              <span className="text-lg">Creada por:</span> {createdBy}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-lg">Inicio:</span> {startDate}
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-lg">Predefinida:</span>{" "}
              <span
                className={isPredefined ? " text-green-500" : "text-red-500"}
              >
                {isPredefined ? "Sí" : "No"}
              </span>
            </p>
            <p className="text-gray-700 mb-2">
              <span className="text-lg">Certificada:</span>{" "}
              <span
                className={isCertified ? " text-green-500" : "text-red-500"}
              >
                {isCertified ? "Sí" : "No"}
              </span>
            </p>
          </div>
          <div className="flex">
            <div className="ml-60">
              <h2 className="text-2xl">Lista de ejercicios</h2>
              <div>
                <h2>Ejer 1</h2>
                <h2>Ejer 2</h2>
                <h2>Ejer 3</h2>
                <h2>Ejer 4</h2>
              </div>
            </div>
            <div className="ml-60">
              <h2 className="text-2xl">Recomendaciones</h2>
              <div>
                <h2>Rec 1</h2>
                <h2>Rec 2</h2>
                <h2>Rec 3</h2>
                <h2>Rec 4</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl">Semana</h2>
          <div className="mt-5 flex justify-between">
            <div>
              <p>Lunes:</p>
            </div>
            <div>
              <p>Martes:</p>
            </div>
            <div>
              <p>Miercoles:</p>
            </div>
            <div>
              <p>Jueves:</p>
            </div>
            <div>
              <p>Viernes:</p>
            </div>
            <div>
              <p>Sabado:</p>
            </div>
            <div>
              <p>Domingo:</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineDetailScreen;
