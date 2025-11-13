import { useEffect, useState } from "react";
import Button from "../ui/Button";

const RelationUserTrainer = () => {
  const [students, setStudents] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    // Simulación de datos (reemplazar con fetch a API si es necesario)
    setStudents([
      { id: "S1", first_name: "Carlos", last_name: "Pérez", email: "carlos@uni.com" },
      { id: "S2", first_name: "María", last_name: "Gómez", email: "maria@uni.com" },
      { id: "S3", first_name: "Andrés", last_name: "López", email: "andres@uni.com" },
    ]);

    setTrainers([
      { id: "E1", first_name: "Laura", last_name: "García", email: "laura@uni.com" },
      { id: "E2", first_name: "José", last_name: "Martínez", email: "jose@uni.com" },
    ]);
  }, []);

  const handleAddStudent = (student) => {
    if (!selectedTrainer) {
      setMessage({ type: "error", text: "Selecciona primero un entrenador." });
      return;
    }

    if (selectedStudents.some((s) => s.id === student.id)) {
      setMessage({ type: "error", text: "Este estudiante ya está asignado." });
      return;
    }

    setSelectedStudents((prev) => [...prev, student]);
    setMessage({ type: "success", text: `Estudiante ${student.first_name} añadido.` });
  };

  const handleRemoveStudent = (studentId) => {
    const student = selectedStudents.find((s) => s.id === studentId);
    setSelectedStudents((prev) => prev.filter((s) => s.id !== studentId));
    setMessage({ type: "success", text: `Estudiante ${student.first_name} eliminado.` });
  };

  const handleSaveRelations = () => {
    if (!selectedTrainer) {
      setMessage({ type: "error", text: "Selecciona un entrenador antes de guardar." });
      return;
    }

    console.log("Guardando relación:", {
      entrenador: selectedTrainer,
      estudiantes: selectedStudents,
    });

    setMessage({
      type: "success",
      text: "Relaciones guardadas exitosamente (simulado).",
    });
  };

  return (
    <div className="flex flex-col p-10 gap-8 bg-background rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-primary text-center">
        Gestión de Usuarios
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Entrenadores */}
        <div className="p-6 rounded-md  bg-background">
          <h2 className="font-semibold text-xl mb-4">Entrenadores</h2>
          {trainers.map((t) => (
            <div
              key={t.id}
              className={`p-2 cursor-pointer rounded ${
                selectedTrainer?.id === t.id
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelectedTrainer(t);
                setMessage({ type: "success", text: `Entrenador ${t.first_name} seleccionado.` });
              }}
            >
              {t.first_name} {t.last_name}
            </div>
          ))}
        </div>

        {/* Estudiantes */}
        <div className="p-6 rounded-md  bg-background">
          <h2 className="font-semibold text-xl mb-4">Estudiantes</h2>
          {students.map((s) => (
            <div
              key={s.id}
              className="flex justify-between items-center border-b py-2"
            >
              <p>
                {s.first_name} {s.last_name}
              </p>
              <Button
                onClick={() => handleAddStudent(s)}
                className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-600"
              >
                Añadir
              </Button>
            </div>
          ))}
        </div>

        {/* Relación actual */}
        <div className="p-6 rounded-md  bg-background">
          <h2 className="font-semibold text-xl mb-4">
            Estudiantes asignados
          </h2>
          {selectedStudents.length === 0 ? (
            <p className="text-gray-500">No hay estudiantes asignados.</p>
          ) : (
            selectedStudents.map((s) => (
              <div
                key={s.id}
                className="flex justify-between items-center border-b py-2"
              >
                <p>
                  {s.first_name} {s.last_name}
                </p>
                <Button
                  onClick={() => handleRemoveStudent(s.id)}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                >
                  Quitar
                </Button>
              </div>
            ))
          )}
          <div className="mt-5">
            <Button onClick={handleSaveRelations}>Guardar Cambios</Button>
          </div>
        </div>
      </div>

      {/* Mensaje de estado */}
      {message.text && (
        <div
          className={`text-center font-medium mt-4 ${
            message.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default RelationUserTrainer;
