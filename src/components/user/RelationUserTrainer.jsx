import { useEffect, useState } from "react";
import Button from "../ui/Button";

import getAllStudents from "../../api/users/getAllStudents";
import getAllTrainers from "../../api/users/getAllTrainers";
import assignStudentToTrainer from "../../api/users/assignStudentToTrainer";
import unassignStudent from "../../api/users/unassignStudent";

const RelationUserTrainer = () => {
  const [students, setStudents] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const [selectedStudents, setSelectedStudents] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const studentsRes = await getAllStudents();
      const trainersRes = await getAllTrainers();
      console.log(studentsRes)
      console.log(trainersRes)
      setStudents(studentsRes);
      setTrainers(trainersRes);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  const handleAddStudent = async (student) => {
    if (!selectedTrainer) {
      setMessage({ type: "error", text: "Selecciona primero un entrenador." });
      return;
    }

    try {
      await assignStudentToTrainer({
        studentUsername: student.username,
        trainerUsername: selectedTrainer.username,
      });

      setSelectedStudents((prev) => [...prev, student]);

      setMessage({
        type: "success",
        text: `Estudiante ${student.fullName} asignado.`,
      });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  const handleRemoveStudent = async (username) => {
    try {
      await unassignStudent(username);

      setSelectedStudents((prev) =>
        prev.filter((s) => s.username !== username)
      );

      setMessage({
        type: "success",
        text: `Estudiante removido.`,
      });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  return (
    <div className="flex flex-col p-10 gap-8 bg-background rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-primary text-center">
        Gestión de Usuarios
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Entrenadores */}
        <div className="p-6 rounded-md bg-background">
          <h2 className="font-semibold text-xl mb-4">Entrenadores</h2>
          {trainers.map((t) => (
            <div
              key={t.username}
              className={`p-2 cursor-pointer rounded ${
                selectedTrainer?.username === t.username
                  ? "bg-primary text-white"
                  : "hover:bg-gray-100"
              }`}
              onClick={() => {
                setSelectedTrainer(t);
                setSelectedStudents([]);
                setMessage({
                  type: "success",
                  text: `Entrenador ${t.fullName} seleccionado.`,
                });
              }}
            >
              {t.fullName}
            </div>
          ))}
        </div>

        {/* Estudiantes */}
        <div className="p-6 rounded-md bg-background">
          <h2 className="font-semibold text-xl mb-4">Estudiantes</h2>
          {students.map((s) => (
            <div
              key={s.username}
              className="flex justify-between items-center border-b py-2"
            >
              <p>{s.fullName}</p>
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
        <div className="p-6 rounded-md bg-background">
          <h2 className="font-semibold text-xl mb-4">
            Estudiantes asignados
          </h2>

          {selectedStudents.length === 0 && (
            <p className="text-gray-500">No hay estudiantes asignados.</p>
          )}

          {selectedStudents.map((s) => (
            <div
              key={s.username}
              className="flex justify-between items-center border-b py-2"
            >
              <p>{s.fullName}</p>
              <Button
                onClick={() => handleRemoveStudent(s.username)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
              >
                Quitar
              </Button>
            </div>
          ))}
        </div>
      </div>

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
