import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import { useState } from "react";

const CreateExerciseForm = () => {

  const [difficultyValue, setDifficultyValue] = useState(5);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-around px-10">
        <div className="flex flex-col gap-10 w-100  justify-center">
          <Input text="Tipo" />
          <Input text="Nombre" />
          <Textarea text="Descripción"></Textarea>
        </div>
        <div className="flex flex-col gap-10 w-100  justify-center">
          <div>
            <label htmlFor="dificulty" >Dificultad: <span className="font-bold text-primary underline">{difficultyValue}</span></label>
            <input
              type="range"  
              min="1"
              max="10"
              step="1"
              onChange={(e) => setDifficultyValue(e.target.value)}
              className="w-full mt-5 range-slider"
            />
          </div>
          <Input text="Duracion (minutos)" type="number" />
          <Input text="URL video" />
        </div>
      </div>

      <div className="w-200 mx-auto">
        <Button>Crear</Button>
      </div>
    </div>
  );
};

export default CreateExerciseForm;
