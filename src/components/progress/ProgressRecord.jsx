import { useState, useEffect } from "react";
import Button from "../ui/Button";
import GetProgressByUser from "../../api/progress/GetProgressByUser";

const ProgressRecord = () => {
  const [showAll, setShowAll] = useState(false);
  const [progressList, setProgresList] = useState([])


  // try - catch
  useEffect(() => {
    const handleProgressList = () => {
      const userId = "1"
      const data = GetProgressByUser({userId});
      setProgresList(data);
    };

    handleProgressList();
  }, []);

  const visibleRecords = showAll ? progressList : progressList.slice(0, 4);

  return (
    <div className="py-4 ">
      <div className="grid gap-3">
        {visibleRecords.map((record) => (
          <div
            key={record.id}
            className="bg-background p-4 rounded-md shadow-sm hover:shadow-md transition-all duration-150 hover:translate-y-1 hover:cursor-pointer"
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
