import { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const ProgressExerciseComparison = () => {
  const [metric, setMetric] = useState("effortLevel");
  const [exercise, setExercise] = useState("Press de banca");

  // Lista de ejercicios simulados
  const exercises = ["Press de banca", "Sentadillas", "Peso muerto", "Trote"];

  // Datos simulados por ejercicio
  const allData = {
    "Press de banca": [
      { week: "Semana 1", effortLevel: 6, totalReps: 100, avgWeight: 50, time: 40 },
      { week: "Semana 2", effortLevel: 6.5, totalReps: 120, avgWeight: 55, time: 45 },
      { week: "Semana 3", effortLevel: 7, totalReps: 140, avgWeight: 60, time: 50 },
      { week: "Semana 4", effortLevel: 7.5, totalReps: 160, avgWeight: 65, time: 55 },
    ],
    "Sentadillas": [
      { week: "Semana 1", effortLevel: 50, totalReps: 80, avgWeight: 40, time: 30 },
      { week: "Semana 2", effortLevel: 5.5, totalReps: 100, avgWeight: 45, time: 35 },
      { week: "Semana 3", effortLevel: 6, totalReps: 120, avgWeight: 50, time: 40 },
      { week: "Semana 4", effortLevel: 6.5, totalReps: 140, avgWeight: 55, time: 45 },
    ],
    "Peso muerto": [
      { week: "Semana 1", effortLevel: 7, totalReps: 90, avgWeight: 60, time: 35 },
      { week: "Semana 2", effortLevel: 7.5, totalReps: 110, avgWeight: 65, time: 40 },
      { week: "Semana 3", effortLevel: 8, totalReps: 130, avgWeight: 70, time: 45 },
      { week: "Semana 4", effortLevel: 8.5, totalReps: 150, avgWeight: 75, time: 50 },
    ],
    "Trote": [
      { week: "Semana 1", effortLevel: 4, totalReps: 0, avgWeight: 0, time: 20 },
      { week: "Semana 2", effortLevel: 4.5, totalReps: 0, avgWeight: 0, time: 25 },
      { week: "Semana 3", effortLevel: 5, totalReps: 0, avgWeight: 0, time: 30 },
      { week: "Semana 4", effortLevel: 5.5, totalReps: 0, avgWeight: 0, time: 35 },
    ],
  };

  const data = allData[exercise];

  return (
    <div className="bg-white p-5 rounded-md shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h3 className="text-xl font-semibold text-primary mb-1">
            Comparativa general del último mes
          </h3>
          <p className="text-gray-600 text-sm">
            Analiza cómo ha variado tu desempeño semanal por ejercicio.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <label className="font-semibold text-primary mr-3">
              Ejercicio:
            </label>
            <select
              value={exercise}
              onChange={(e) => setExercise(e.target.value)}
              className="border border-gray-400 rounded-md p-2 bg-white"
            >
              {exercises.map((ex) => (
                <option key={ex} value={ex}>
                  {ex}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-semibold text-primary mr-3">
              Métrica:
            </label>
            <select
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
              className="border border-gray-400 rounded-md p-2 bg-white"
            >
              <option value="effortLevel">Nivel de esfuerzo</option>
              <option value="totalReps">Repeticiones totales</option>
              <option value="avgWeight">Peso promedio (kg)</option>
              <option value="time">Tiempo total (min)</option>
            </select>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <ResponsiveContainer width="100%" height={300}>
          {metric === "effortLevel" ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="effortLevel"
                stroke="#0b2447"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="week" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey={metric} fill="#0b2447" radius={[6, 6, 0, 0]} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ProgressExerciseComparison;
