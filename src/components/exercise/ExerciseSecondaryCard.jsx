import { Link } from "react-router-dom";

import Modal from "../ui/Modal";
import Button from "../ui/Button";
import { useState } from "react";

const ExerciseSecondaryCard = ({ exercise, onAdd, selected }) => {
  const [showModal, setShowModal] = useState(false);

  if (!exercise) return null;

  // id para redireccion
  // description y mas... para detalles
  const {
    id,
    urlImg,
    name,
    createdBy,
    type,
    difficulty,
    description,
    duration,
    isPredefined,
  } = exercise;

  return (
    <>
      <div className="flex flex-row  bg-primary/10 h-30 p-5 shadow-md rounded-md hover:translate-y-1 transition-all ease-out duration-150">
        <div className="my-auto">
          <h2 className="mb-3">{name}</h2>
          <p>
            Creado por: <span className="text-sm">{createdBy.name}</span>
          </p>
          <p>
            Tipo: <span className="text-sm">{type} </span>
          </p>
        </div>

        <div className="text-sm ml-auto my-auto mr-3">
          <Link
            className="text-md hover:underline"
            to={"#"}
            onClick={() => setShowModal(true)}
          >
            Ver detalles
          </Link>
          <div className="pt-4">
            {selected ? (
              <Button disabled className="text-text border-2 p-2 border-primary rounded-md bg-green-300" >
                Agregado
              </Button>
            ) : (
              <Button onClick={() => onAdd(exercise)}>Agregar</Button>
            )}
          </div>
        </div>
      </div>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className="max-h-[80vh] overflow-y-auto px-2">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{name}</h2>

          <img
            src={urlImg}
            alt={name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />

          <p className="text-gray-700 mb-2">
            <span className="text-lg font-semibold">Creada por:</span>{" "}
            {createdBy.name}
          </p>

          <p className="text-gray-700 mb-2">
            <span className="text-lg font-semibold">Dificultad:</span>{" "}
            {difficulty}
          </p>

          <p className="text-gray-700 mb-2">
            <span className="text-lg font-semibold">Duración:</span> {duration}
          </p>

          <p className="text-gray-700 mb-2">
            <span className="text-lg font-semibold">Predefinida:</span>{" "}
            <span className={isPredefined ? "text-green-500" : "text-red-500"}>
              {isPredefined ? "Sí" : "No"}
            </span>
          </p>

          {/* VIDEOS */}
          <div className="mt-6">
            <p className="text-gray-700 mb-3 text-lg font-semibold">Videos:</p>

            {exercise.videos && exercise.videos.length > 0 ? (
              <div className="flex flex-col gap-4">
                {exercise.videos.map((v, idx) => {
                  const isYT =
                    v.includes("youtube.com") || v.includes("youtu.be");

                  return (
                    <div key={idx} className="flex justify-center">
                      {isYT ? (
                        <iframe
                          src={v.replace("watch?v=", "embed/")}
                          className="w-80 h-44 rounded-md shadow-md"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <video
                          src={v}
                          controls
                          className="w-80 h-44 rounded-md shadow-md"
                        />
                      )}
                    </div>
                  );
                })}
              </div>
            ) : (
              <p className="text-gray-500">No hay videos disponibles.</p>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExerciseSecondaryCard;
