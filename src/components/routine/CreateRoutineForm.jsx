import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import ExerciseSecondaryCard from "../exercise/ExerciseSecondaryCard";
import { useContext, useEffect, useState } from "react";
import getAllExercises from "../../api/exercises/GetAllExercises";
import createRoutine from "../../api/routines/CreateRoutine";
import { useAuth } from "../../context/AuthContext";

const CreateRoutineForm = ({ fetchRoutines }) => {
  const { user } = useAuth();
  const [exerciseList, setExerciseList] = useState([]);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [routineData, setRoutineData] = useState({
    name: "",
    description: "",
    urlImg: ""
  });
  const [successMsg, setSuccessMsg] = useState("");

  const fetchExercises = async () => {
    try {
      const data = await getAllExercises();
      setExerciseList(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleAddExercise = (exercise) => {
    setSelectedExercises((prev) => {
      // evitar duplicados
      if (prev.some((e) => e.exerciseId === exercise.id)) return prev;

      const dto = {
        exerciseId: exercise.id,
        name: exercise.name || "n/a",
        sets: exercise.sets ?? 1,
        reps: exercise.reps ?? 0,
        duration: exercise.duration ?? 1,
      };

      return [...prev, dto];
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name: routineData.name,
      description: routineData.description,
      urlImg: routineData.urlImg,
      createdBy: { userId: user.username, name: user.name },
      exercises: selectedExercises,
    };

    console.log("RUTINA A ENVIAR:", payload);

    try {
      const res = await createRoutine(payload);
      setSuccessMsg("Rutina creada correctamente");

      setRoutineData({ name: "", description: "", urlImg: "" });
      setSelectedExercises([]);
      fetchRoutines();
      setTimeout(() => setSuccessMsg(""), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, []);
  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <div className="flex justify-between px-10">
        <div className="flex flex-col gap-10 w-100">
          <Input
            text="Nombre"
            value={routineData.name}
            onChange={(e) =>
              setRoutineData({ ...routineData, name: e.target.value })
            }
          />

          

          <Textarea
            text="Descripción"
            value={routineData.description}
            onChange={(e) =>
              setRoutineData({ ...routineData, description: e.target.value })
            }
          />

          <Input
            text="URL image"
            value={routineData.urlImg}
            onChange={(e) =>
              setRoutineData({ ...routineData, name: e.target.value })
            }
          />
        </div>

        <div className="flex flex-col p-5 gap-6 w-130 h-[378px] overflow-y-auto border-2 border-primary rounded-md">
          <h2>Ejercicios para agregar</h2>
          {exerciseList.map((exercise) => (
            <ExerciseSecondaryCard
              key={exercise.id}
              exercise={exercise}
              onAdd={handleAddExercise}
              selected={selectedExercises.some(
                (e) => e.exerciseId === exercise.id
              )}
            />
          ))}
        </div>
      </div>

      <div className="w-200 mx-auto">
        <Button type="submit">Crear Rutina</Button>
      </div>
      {successMsg && (
          <p className="text-green-500 font-semibold">{successMsg}</p>
        )}
    </form>
  );
};

export default CreateRoutineForm;
