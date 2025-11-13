import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import { useState } from "react";

const ExerciseCard = ({ exercise, lessInfo }) => {
  const [showModal, setShowModal] = useState(false);

  if (!exercise) return null;
  const { id, name, urlImg, difficulty, duration, isPredefined, createdBy , urlVideo} =
    exercise;
  // id para la redireccion

  return (
    <>
      <div className="shadow-md h-90 rounded-md hover:translate-y-2 transition-all ease-out duration-150 bg-background">
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
              <p className="text-md hover:underline hover:cursor-pointer">
                Ver progreso
              </p>
            )}

            <div className="flex mt-2">
              <p className={isPredefined ? "text-green-500" : "text-red-500"}>
                {isPredefined ? "Predefinido" : "No predefinido"}
              </p>
              <div className=" ml-auto">
                <Link
                  className="text-md hover:underline"
                  to={"#"}
                  onClick={() => setShowModal(true)}
                >
                  Ver detalles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* modal */}
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <h2 className="text-2xl font-semibold mb-4 text-primary">{name}</h2>
        <img
          src={urlImg}
          alt={name}
          className="w-full h-40 object-cover rounded-md mb-4"
        />
        {/* <p className="text-gray-700 mb-2">{description}</p> */}
        <p className="text-gray-700 mb-2">
          <span className="text-lg">Creada por:</span> {createdBy}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="text-lg">Dificultad:</span> {difficulty}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="text-lg">Duracion:</span> {duration}
        </p>

        {/* <p className="text-gray-700 mb-2">
          <span className="text-lg">Inicio:</span> {startDate}
        </p> */}
        <p className="text-gray-700 mb-2">
          <span className="text-lg">Predefinida:</span>{" "}
          <span className={isPredefined ? " text-green-500" : "text-red-500"}>
            {isPredefined ? "Sí" : "No"}
          </span>
        </p>
        <div className="">
          <p className="text-gray-700 mb-2">
            <span className="text-lg">Videos:</span>
          </p>
          <div className="flex justify-center my-4">
  <video
    src={exercise.urlVideo}
    controls
    className="w-80 h-44 rounded-md shadow-md"
  ></video>
</div>
        </div>
      </Modal>
    </>
  );
};

export default ExerciseCard;
