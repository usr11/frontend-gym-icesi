import { useState, useEffect } from "react";
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
import GetProgressInRange from "../../api/progress/GetProgressInRange";

const ProgressComparison = () => {
  const [exercise, setExercise] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [progressList, setProgressList] = useState([]);
  const [error, setError] = useState("");

  const exercises = [
    {
      name: "Press de banca",
    },
    {
      name: "Sentadilla",
    },
    {
      name: "Abdominales",
    },
    {
      name: "Running",
    },
  ];

  useEffect(() => {
    if (!exercise) return;

    try {
      const data = GetProgressInRange({
        dateStart,
        dateEnd,
        exercise,
      });
      setProgressList(data);
      setError("");
    } catch (e) {
      setError("No hay progresos registrados para esta búsqueda");
      setProgressList([]);
    }
  }, [exercise, dateStart, dateEnd]);

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
            {exercises.length !== 0 &&
              exercises.map((obj) => (
                <option value={obj.name}>{obj.name}</option>
              ))}

            {/* <option value="e">Press de banca</option>
            <option value="b">Sentadillas</option>
            <option value="c">Abs</option>
            <option value="d">T</option> */}
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
        {exercise && error === "" ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={progressList}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {progressList.some((item) => item.reps !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="reps"
                  name="repeticiones"
                  stroke="#0000ff"
                />
              )}
              {progressList.some((item) => item.time !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="time"
                  name="Tiempo"
                  stroke="#0000ff"
                />
              )}

              {progressList.some((item) => item.sets !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="sets"
                  name="series"
                  stroke="#FF0000"
                />
              )}
              {progressList.some((item) => item.distance !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="distance"
                  name="Distancia"
                  stroke="#FF0000"
                />
              )}
              {progressList.some((item) => item.weight !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="weight"
                  name="Peso"
                  stroke="#FFA500"
                />
              )}
              {progressList.some((item) => item.rhythm !== undefined) && (
                <Line
                  type="monotone"
                  dataKey="rhythm"
                  name="Ritmo"
                  stroke="#FFA500"
                />
              )}
              {/* <Line
                type="monotone"
                dataKey="effortLevel"
                name="Nivel de esfuerzo"
                stroke="#ffc658"
              /> */}
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p
            className={`text-center ${
              error ? "text-red-500" : "text-gray-600"
            }`}
          >
            {error || "Selecciona un ejercicio para ver su progreso"}
          </p>
        )}
      </div>
      <div></div>
    </div>
  );
};

export default ProgressComparison;
