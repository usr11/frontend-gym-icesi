import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "../ui/Modal";

const RoutineCard = ({ routine, lessInfo }) => {
  if (!routine) return null;
  const navigate = useNavigate();
  const {
    id = "sin-id",
    urlImg = "https://via.placeholder.com/300x200?text=Sin+imagen",
    name = "Rutina sin nombre",
    description = "Sin descripción disponible",
    isCertified = false,
    isPredefined = false,
    startDate = "Fecha no disponible",
    createdBy = { name: "Desconocido" },
  } = routine || {};
  const [showModal, setShowModal] = useState(false);
  const handleViewDetails = () => {
    navigate(`/routines/${id}`, { state: { routine } });
  };

  return (
    <>
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
              <span className="text-sm">
                {lessInfo ? createdBy?.name || "Desconocido" : startDate}

              </span>
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
                <button
                  className="text-md hover:underline hover:cursor-pointer"
                  to={`/routines/${id}`}
                  onClick={handleViewDetails}
                >
                  Ver detalles
                </button>
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
          <p className="text-gray-700 mb-2">{description}</p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg">Creada por:</span> {createdBy?.name || "Desconocido"}

          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg">Inicio:</span> {startDate}
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg">Predefinida:</span>{" "}
            <span className={isPredefined ? " text-green-500" : "text-red-500"}>
              {isPredefined ? "Sí" : "No"}
            </span>
          </p>
          <p className="text-gray-700 mb-2">
            <span className="text-lg">Certificada:</span>{" "}
            <span className={isCertified ? " text-green-500" : "text-red-500"}>
              {isCertified ? "Sí" : "No"}
            </span>
          </p>
        </Modal>
      </div>
    </>
  );
};

export default RoutineCard;
