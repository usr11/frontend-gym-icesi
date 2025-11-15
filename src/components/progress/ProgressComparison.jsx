import { useState, useEffect, useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { ProgressContext } from "../../context/ProgressContext";

const ProgressComparison = () => {
  const [exercise, setExercise] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [progressListNormalized, setProgressListNormalized] = useState([]);
  const [error, setError] = useState("");
  const {progressList} = useContext(ProgressContext)
  // Sacar lista única de ejercicios
  const exercises = [
    ...new Set(progressList.map((p) => p.exerciseName).filter(Boolean)),
  ].map((name) => ({ name }));

  useEffect(() => {
    if (!exercise || !dateStart || !dateEnd) {
      setProgressListNormalized([]);
      return;
    }

    // Filtrar por ejercicio y rango de fechas
    const filtered = progressList.filter((p) => {
      const progressDate = p.completedAt?.split("T")[0] || p.createdAt?.split("T")[0];
      return (
        p.exerciseName === exercise &&
        progressDate >= dateStart &&
        progressDate <= dateEnd
      );
    });

    if (filtered.length === 0) {
      setError("No hay progresos registrados para esta búsqueda");
    } else {
      setError("");
    }

    // Normalizar datos
    const formatted = filtered.map((p) => ({
      date: p.completedAt?.split("T")[0] || p.createdAt?.split("T")[0],
      reps: p.reps,
      sets: p.sets,
      weight: p.weight,
      time: p.time,
      distance: p.distance,
      effortLevel: p.effortLevel,
      exercise: { name: p.exerciseName },
    }));

    setProgressListNormalized(formatted);
  }, [exercise, dateStart, dateEnd, progressList]);

  return (
    <div className="p-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
        <div>
          <p className="font-semibold mb-1">Selecciona el ejercicio:</p>
          <select
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="border border-gray-400 rounded-md p-2 bg-white"
          >
            <option value="">Elegir ejercicio</option>
            {exercises.map((obj) => (
              <option key={obj.name} value={obj.name}>
                {obj.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col md:flex-row md:items-center gap-2">
          <div>
            <p className="font-semibold mb-1">Desde:</p>
            <input
              type="date"
              value={dateStart}
              onChange={(e) => setDateStart(e.target.value)}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div>
            <p className="font-semibold mb-1">Hasta:</p>
            <input
              type="date"
              value={dateEnd}
              onChange={(e) => setDateEnd(e.target.value)}
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-5">
        {exercise && error  === "" || dateEnd === "" || dateStart === "" ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressListNormalized}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {progressListNormalized.some((i) => i.reps !== undefined) && (
                <Line type="monotone" dataKey="reps" name="Repeticiones" stroke="#0000ff" />
              )}
              {progressListNormalized.some((i) => i.sets !== undefined) && (
                <Line type="monotone" dataKey="sets" name="Series" stroke="#FF0000" />
              )}
              {progressListNormalized.some((i) => i.weight !== undefined) && (
                <Line type="monotone" dataKey="weight" name="Peso" stroke="#FFA500" />
              )}
              {progressListNormalized.some((i) => i.time !== undefined) && (
                <Line type="monotone" dataKey="time" name="Tiempo" stroke="#0000ff" />
              )}
              {progressListNormalized.some((i) => i.distance !== undefined) && (
                <Line type="monotone" dataKey="distance" name="Distancia" stroke="#FF0000" />
              )}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className={`text-center ${error ? "text-red-500" : "text-gray-600"}`}>
            {error || "Selecciona un ejercicio y rango de fechas"}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgressComparison;
