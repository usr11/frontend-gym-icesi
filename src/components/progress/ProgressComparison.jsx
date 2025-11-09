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
} from "recharts";

const ProgressComparison = () => {
  const [exercise, setExercise] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");

  const data = [
    { date: "2025-10-01", reps: 10, sets: 3, weight: 60, effortLevel: 6 },
    { date: "2025-10-08", reps: 10, sets: 4, weight: 65, effortLevel: 7 },
    { date: "2025-10-15", reps: 14, sets: 4, weight: 70, effortLevel: 8 },
    { date: "2025-10-15", reps: 14, sets: 4, weight: 70, effortLevel: 8 },
  ];

  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-3">
        <div>
          <p className="font-semibold mb-1">Selecciona el ejercicio:</p>
          <select
            value={exercise}
            onChange={(e) => setExercise(e.target.value)}
            className="border border-gray-400 rounded-md p-2 bg-white"
          >
            <option value="">Elegir ejercicio</option>
            <option value="pressBanca">Press de banca</option>
            <option value="sentadilla">Sentadillas</option>
            <option value="trote">Trote</option>
            <option value="pesoMuerto">Peso muerto</option>
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
        {exercise ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="reps"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="weight" stroke="#82ca9d" />
              <Line type="monotone" dataKey="effortLevel" stroke="#ffc658" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p className="text-gray-600 text-center ">
            Selecciona un ejercicio para ver su progreso
          </p>
        )}
      </div>
    </div>
  );
};

export default ProgressComparison;
