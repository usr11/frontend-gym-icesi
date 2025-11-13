import Input from "../ui/Input";
import Button from "../ui/Button";
import Textarea from "../ui/Textarea";
import { useState } from "react";
import createExercise from "../../api/exercises/CreateExercise";

const CreateExerciseForm = () => {
  const [difficultyValue, setDifficultyValue] = useState(5);
  const [formData, setFormData] = useState({
    type: "",
    name: "",
    description: "",
    duration: "",
    urlVideo: "",
  });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleChange = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    setSuccessMsg("");

    try {
      const newExercise = {
        ...formData,
        difficulty: Number(difficultyValue),
      };

      const result = await createExercise(newExercise);
      setSuccessMsg("✅ Ejercicio creado correctamente.");
      console.log("Ejercicio creado:", result);
      setFormData({ type: "", name: "", description: "", duration: "", urlVideo: "" });
    } catch (error) {
      setErrorMsg("❌ Error al crear el ejercicio: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
      <div className="flex justify-around px-10">
        <div className="flex flex-col gap-10 w-100 justify-center">
          <Input text="Tipo" value={formData.type} onChange={(e) => handleChange("type", e.target.value)} />
          <Input text="Nombre" value={formData.name} onChange={(e) => handleChange("name", e.target.value)} />
          <Textarea text="Descripción" value={formData.description} onChange={(e) => handleChange("description", e.target.value)} />
        </div>

        <div className="flex flex-col gap-10 w-100 justify-center">
          <div>
            <label htmlFor="difficulty">
              Dificultad: <span className="font-bold text-primary underline">{difficultyValue}</span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={difficultyValue}
              onChange={(e) => setDifficultyValue(e.target.value)}
              className="w-full mt-5 range-slider"
            />
          </div>

          <Input
            text="Duración (minutos)"
            type="number"
            value={formData.duration}
            onChange={(e) => handleChange("duration", e.target.value)}
          />
          <Input
            text="URL video"
            value={formData.urlVideo}
            onChange={(e) => handleChange("urlVideo", e.target.value)}
          />
        </div>
      </div>

      <div className="w-200 mx-auto flex flex-col items-center gap-3">
        <Button disabled={loading}>{loading ? "Creando..." : "Crear"}</Button>

        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        {successMsg && <p className="text-green-500">{successMsg}</p>}
      </div>
    </form>
  );
};

export default CreateExerciseForm;
