import { useState } from "react";
import Button from "../ui/Button";

const ProgressRecord = () => {
  const [showAll, setShowAll] = useState(false);

  const records = [
    {
      id: 1,
      date: "2025-11-01",
      exercise: "Press de banca",
      reps: 12,
      sets: 4,
      weight: 65,
      effortLevel: 7,
    },
    {
      id: 2,
      date: "2025-10-28",
      exercise: "Sentadillas",
      reps: 10,
      sets: 3,
      weight: 80,
      effortLevel: 8,
    },
    {
      id: 3,
      date: "2025-10-25",
      exercise: "Trote",
      time: "25 min",
      distance: "4 km",
      rhythm: 90,
      effortLevel: 6,
    },
    {
      id: 4,
      date: "2025-10-20",
      exercise: "Peso muerto",
      reps: 8,
      sets: 3,
      weight: 90,
      effortLevel: 7,
    },
    {
      id: 5,
      date: "2025-10-15",
      exercise: "Press militar",
      reps: 10,
      sets: 3,
      weight: 40,
      effortLevel: 6,
    },
    {
      id: 6,
      date: "2025-10-10",
      exercise: "Trote",
      time: "20 min",
      distance: "3.5 km",
      effortLevel: 5,
    },
  ];

  const visibleRecords = showAll ? records : records.slice(0, 4);

  return (
    <div className="py-4">
      <div className="grid gap-3">
        {visibleRecords.map((record) => (
          <div
            key={record.id}
            className="bg-white p-4 rounded-md shadow-sm border border-gray-200 hover:shadow-md transition-all duration-150"
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">{record.exercise}</p>
              <span className="text-sm text-gray-500">{record.date}</span>
            </div>
            <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-1 text-sm text-gray-700 h-15">
              {record.weight && (
                <p>
                  <strong>Peso:</strong> {record.weight} kg
                </p>
              )}
              {record.rhythm && (
                <p>
                  <strong>Ritmo:</strong> {record.rhythm} kg
                </p>
              )}
              {record.reps && (
                <p>
                  <strong>Reps:</strong> {record.reps}
                </p>
              )}
              {record.sets && (
                <p>
                  <strong>Sets:</strong> {record.sets}
                </p>
              )}

              {record.time && (
                <p>
                  <strong>Tiempo:</strong> {record.time}
                </p>
              )}
              {record.distance && (
                <p>
                  <strong>Distancia:</strong> {record.distance}
                </p>
              )}
              <p>
                <strong>Esfuerzo:</strong> {record.effortLevel}/10
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5">
        <Button onClick={() => setShowAll(!showAll)}>
          {showAll ? "Mostrar menos" : "Mostrar más"}
        </Button>
      </div>
    </div>
  );
};

export default ProgressRecord;
