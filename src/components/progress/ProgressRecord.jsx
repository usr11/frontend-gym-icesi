import { useContext, useState } from "react";
import Button from "../ui/Button";
import { ProgressContext } from "../../context/ProgressContext";

const ProgressRecord = () => {
  const [showAll, setShowAll] = useState(false);
  const { progressList } = useContext(ProgressContext);

  const visibleRecords = showAll ? progressList : progressList.slice(0, 4);

  return (
    <div className="py-4">
      {progressList.length === 0 ? (
        <div>No tiene progresos registrados</div>
      ) : (
        <>
          <div className="grid gap-3">
            {visibleRecords.map((record) => (
              <div
                key={record.id}
                className="bg-background p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-150 hover:translate-y-1 hover:cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-lg">{record.exerciseName}</p>
                  <span className="text-sm text-gray-500">
                    {record.createdAt}
                  </span>
                </div>

                <div className="mt-2 grid grid-cols-2 md:grid-cols-3 gap-y-1 text-sm text-gray-700 h-15">
                  {record.weight !== 0 && (
                    <p>
                      <strong>Peso:</strong> {record.weight} kg
                    </p>
                  )}
                  {record.rhythm !== 0 && (
                    <p>
                      <strong>Ritmo:</strong> {record.rhythm}
                    </p>
                  )}
                  {record.reps !== 0 && (
                    <p>
                      <strong>Reps:</strong> {record.reps}
                    </p>
                  )}
                  {record.sets !== 0 && (
                    <p>
                      <strong>Sets:</strong> {record.sets}
                    </p>
                  )}
                  {record.time !== 0 && (
                    <p>
                      <strong>Tiempo:</strong> {record.time}
                    </p>
                  )}
                  {record.distance !== 0 && (
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

          {progressList.length > 4 && (
            <div className="flex justify-center mt-5">
              <Button onClick={() => setShowAll(!showAll)}>
                {showAll ? "Mostrar menos" : "Mostrar más"}
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProgressRecord;
