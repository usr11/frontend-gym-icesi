import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import ExerciseSecondaryCard from "../exercise/ExerciseSecondaryCard";

const exercises = [
  {
    id: "1",
    name: "Ejercicio 1",
    createdBy: "Juan",
    type: "Fuerza",
    description: "Descripcion del ejercicio 1",
  },
  {
    id: "2",
    name: "Ejercicio 2",
    createdBy: "Pablo",
    type: "Cardio",
    description: "Descripcion del ejercicio 2",
  },
  {
    id: "3",
    name: "Ejercicio 3",
    createdBy: "Sebas",
    type: "Funcional",
    description: "Descripcion del ejercicio 3",
  },
];

const CreateRoutineForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between px-10">
        <div className="flex flex-col gap-10 w-100 justify-center">
          <Input text="Tipo" />
          <Input text="Nombre" />
          <Input text="URL image" />
          <Textarea text="Descripción"></Textarea>
        </div>
        <div className="flex flex-col p-5  w-160 h-[378px] gap-5 overflow-y-auto border-2 border-primary rounded-md">
          <h2>Ejercicios para agregar</h2>
          {exercises.length !== 0 &&
            exercises.map((exercise) => (
              <ExerciseSecondaryCard key={exercise.id} exercise={exercise} />
            ))}
        </div>
      </div>
      <div className="w-200 mx-auto">
        <Button>Crear</Button>
      </div>
    </div>
  );
};

export default CreateRoutineForm;
