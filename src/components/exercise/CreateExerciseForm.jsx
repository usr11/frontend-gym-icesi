import Input from "../ui/Input";
import Button from "../ui/Button";

const CreateExerciseForm = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-around px-10">
        <div className="flex flex-col gap-10 w-100 bg-amber-200 justify-center">
          <Input text="Tipo" />
          <Input text="Nombre" />
          <Input text="Descripción" />
        </div>
        <div className="flex flex-col gap-10 w-100 bg-amber-200 justify-center">
          {/* <label htmlFor="dificulty">Dificultad</label>
          <input
            type="range"
            min="1"
            max="10"
            step="1"
          /> */}
          <Input text="Dificultad" />
          <Input text="Duracion (minutos)" />
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
