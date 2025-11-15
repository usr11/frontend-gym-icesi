import { Link } from "react-router-dom";
import Modal from "../ui/Modal";
import { useState } from "react";

const ExerciseCard = ({ exercise, lessInfo }) => {
  const [showModal, setShowModal] = useState(false);

  if (!exercise) return null;
  const {
    id,
    name,
    urlImg,
    difficulty,
    duration,
    isPredefined,
    createdByName,
    urlVideo,
  } = exercise;
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
                <span className="text-sm"> {createdByName}</span>
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
        <div className="max-h-[80vh] overflow-y-auto px-2">
          <h2 className="text-2xl font-semibold mb-4 text-primary">{name}</h2>

          <img
            src={urlImg}
            alt={name}
            className="w-full h-40 object-cover rounded-md mb-4"
          />

          <p className="text-gray-700 mb-2">
            <span className="text-lg font-semibold">Creada por:</span>{" "}
            {createdByName}
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

export default ExerciseCard;
