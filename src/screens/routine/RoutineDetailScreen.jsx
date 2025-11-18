import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import getRoutine from "../../api/routines/GetRoutine";
import deleteRoutine from "../../api/routines/DeleteRoutine";

const RoutineDetailScreen = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const routineFromState = location.state?.routine;

  const [routine, setRoutine] = useState(routineFromState || null);
  const [loading, setLoading] = useState(!routineFromState);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (!routineFromState && id) {
      const loadRoutine = async () => {
        try {
          const data = await getRoutine(id);
          setRoutine(data);
        } catch (err) {
          console.error("Error cargando rutina:", err);
        } finally {
          setLoading(false);
        }
      };

      loadRoutine();
    }
  }, [id, routineFromState]);

  if (loading || !routine) {
    return <div className="text-center p-10">Cargando rutina...</div>;
  }

  const {
    urlImg,
    name,
    description,
    isCertified,
    isPredefined,
    startDate,
    createdBy,
    exercises,
  } = routine;

  const handleDelete = async () => {
    if (!confirm("¿Seguro que deseas eliminar esta rutina?")) return;

    try {
      await deleteRoutine(id);
      setSuccessMessage("Rutina eliminada correctamente.");

      setTimeout(() => {
        navigate("/routines"); // Ruta donde quieras volver
      }, 1500);
    } catch (error) {
      console.error("Error eliminando rutina:", error);
      alert("Error eliminando la rutina");
    }
  };

  return (
    <div className="flex p-15 bg-background rounded-md shadow-md">
      <div>
        {/* 🔥 Mensaje verde de éxito */}
        {successMessage && (
          <div className="bg-green-200 text-green-800 p-3 rounded mb-4">
            {successMessage}
          </div>
        )}

        <div className="flex">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold mb-4 text-primary">{name}</h2>

              {/* 🗑️ BOTÓN PARA ELIMINAR */}
              <button
                onClick={handleDelete}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              >
                Eliminar rutina
              </button>
            </div>

            <img
              src={urlImg}
              alt={name}
              className="w-full h-40 object-cover rounded-md mb-4"
            />

            <p className="text-gray-700 mb-2">{description}</p>
            <p className="text-gray-700 mb-2">
              <span className="text-lg">Creada por:</span>{" "}
              {createdBy?.name || createdBy}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="text-lg">Inicio:</span> {startDate}
            </p>

            <p className="text-gray-700 mb-2">
              <span className="text-lg">Predefinida:</span>{" "}
              <span className={isPredefined ? "text-green-500" : "text-red-500"}>
                {isPredefined ? "Sí" : "No"}
              </span>
            </p>

            <p className="text-gray-700 mb-2">
              <span className="text-lg">Certificada:</span>{" "}
              <span className={isCertified ? "text-green-500" : "text-red-500"}>
                {isCertified ? "Sí" : "No"}
              </span>
            </p>
          </div>

          <div className="flex">
            <div className="ml-60">
              <h2 className="text-2xl">Lista de ejercicios</h2>
              <div>
                {exercises && exercises.length > 0 ? (
                  exercises.map((exercise, idx) => (
                    <h2 key={idx}>{exercise.name || `Ejercicio ${idx + 1}`}</h2>
                  ))
                ) : (
                  <p>No hay ejercicios disponibles</p>
                )}
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
      </div>
    </div>
  );
};

export default RoutineDetailScreen;
