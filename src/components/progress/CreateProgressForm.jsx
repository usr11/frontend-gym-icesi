  import Input from "../ui/Input";
  import Button from "../ui/Button";
  import { useState, useContext } from "react";
  import { ProgressContext } from "../../context/ProgressContext";
  import CreateProgress from "../../api/progress/CreateProgress";

  const CreateProgressForm = ({ fetchProgress }) => {
    // Estados del formulario
    const [formData, setFormData] = useState({
      date: "",
      routineId: "",
      exerciseId: "",
      exerciseName: "",
      exerciseType: "fuerza",
      // Métricas de fuerza
      weight: "",
      reps: "",
      sets: "",
      // Métricas de cardio
      pace: "",
      time: "",
      distance: "",
      // General
      effortLevel: 5,
    });

    const [loading, setLoading] = useState(false);

    const [errorMsg, setErrorMsg] = useState("");
    const [successMsg, setSuccessMsg] = useState("");
    const [exercise, setExercise] = useState({});
    const { progressList } = useContext(ProgressContext);
    const exercises = Object.values(
      progressList.reduce((acc, p) => {
        if (!acc[p.exerciseName]) acc[p.exerciseName] = p;
        return acc;
      }, {})
    );

    // Manejador de cambios genérico
    const handleChange = (key, value) => {
      setFormData({ ...formData, [key]: value });
    };

    // Preparar datos para enviar al backend
    const prepareDataForAPI = () => {
      const baseData = {
        routineId: "1",
        exerciseId: formData.exerciseId,
        exerciseName: formData.exerciseName,
        exerciseType: formData.exerciseType,
        effortLevel: Number(formData.effortLevel),
      };

      if (formData.exerciseType === "fuerza") {
        return {
          ...baseData,
          reps: Number(formData.reps) || 0,
          sets: Number(formData.sets) || 0,
          weight: formData.weight ? Number(formData.weight) : 0,
          //para cumplir con el dto
          time: 0,
          distance: 0,
          //falta el ritmo
        };
      } else {
        // Cardio
        return {
          ...baseData,
          //para cumplir con el dto
          reps: 0,
          sets: 0,
          weight: 0,
          //valores que se van enviar
          time: Number(formData.time) || 0,
          distance: formData.distance ? Number(formData.distance) : 0,
          //falta el ritmo
        };
      }
    };

    // Manejador del submit
    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      setErrorMsg("");
      setSuccessMsg("");

      try {
        const progressData = prepareDataForAPI();

        const result = await CreateProgress(progressData);
        setSuccessMsg("Progreso registrado correctamente.");
        console.log("Progreso creado:", result);

        // Resetear formulario
        setFormData({
          date: "",
          routineId: "",
          exerciseId: "",
          exerciseName: "",
          exerciseType: "fuerza",
          weight: "",
          reps: "",
          sets: "",
          pace: "",
          time: "",
          distance: "",
          effortLevel: 5,
        });
        fetchProgress();
      } catch (error) {
        setErrorMsg("Error al registrar el progreso.");
        console.error("Error en CreateProgress:", error);
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="flex flex-col gap-10">
        <div className="flex justify-around px-10">
          <div className="flex flex-col gap-10 w-100 justify-center p-5 rounded-md">
            <div>
              <label
                htmlFor="routine"
                className="block font-semibold text-primary mb-2"
              >
                Rutina
              </label>
              <select
                name="routine"
                id="routine"
                value={formData.routineId}
                onChange={(e) => handleChange("routineId", e.target.value)}
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-primary outline-none"
              >
                <option value="">Selecciona una rutina</option>
                <option value="rutinaA">Rutina A</option>
                <option value="rutinaB">Rutina B</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="exercise"
                className="block font-semibold text-primary mb-2"
              >
                Ejercicio
              </label>
              <select
                className="w-full border-2 border-gray-300 rounded-md p-3 focus:ring-2 focus:ring-primary outline-none"
                value={exercise.exerciseName || ""}
                onChange={(e) => {
                  const selectedObj = exercises.find(
                    (p) => p.exerciseName === e.target.value
                  );
                  if (selectedObj) {
                    setExercise(selectedObj);
                    setFormData((prev) => ({
                      ...prev,
                      exerciseId: selectedObj.exerciseId,
                      exerciseName: selectedObj.exerciseName,
                      exerciseType: selectedObj.exerciseType,
                    }));
                  }
                }}
              >
                <option value="">Elegir ejercicio</option>

                {exercises.map((obj) => (
                  <option key={obj.exerciseId} value={obj.exerciseName}>
                    {obj.exerciseName}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Métricas */}
          <div className="flex flex-col gap-10 w-100 justify-center p-5 rounded-md">
            {formData.exerciseType === "fuerza" ? (
              <>
                <Input
                  text="Peso (kg)"
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleChange("weight", e.target.value)}
                />
                <Input
                  text="Repeticiones"
                  type="number"
                  value={formData.reps}
                  onChange={(e) => handleChange("reps", e.target.value)}
                />
                <Input
                  text="Series"
                  type="number"
                  value={formData.sets}
                  onChange={(e) => handleChange("sets", e.target.value)}
                />
              </>
            ) : (
              <>
                <Input
                  text="Ritmo (min/km)"
                  type="number"
                  value={formData.pace}
                  onChange={(e) => handleChange("pace", e.target.value)}
                />
                <Input
                  text="Tiempo (minutos)"
                  type="number"
                  value={formData.time}
                  onChange={(e) => handleChange("time", e.target.value)}
                />
                <Input
                  text="Distancia (km)"
                  type="number"
                  value={formData.distance}
                  onChange={(e) => handleChange("distance", e.target.value)}
                />
              </>
            )}

            <div>
              <label
                htmlFor="effort"
                className="block font-semibold text-primary"
              >
                Nivel de esfuerzo:{" "}
                <span className="font-bold text-primary underline">
                  {formData.effortLevel}
                </span>
              </label>
              <input
                type="range"
                min="1"
                max="10"
                step="1"
                value={formData.effortLevel}
                onChange={(e) => handleChange("effortLevel", e.target.value)}
                className="w-full mt-5 range-slider"
              />
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        <div className="w-200 mx-auto flex flex-col items-center gap-3">
          <Button disabled={loading} onClick={handleSubmit}>
            {loading ? "Registrando..." : "Registrar progreso"}
          </Button>

          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          {successMsg && <p className="text-green-500">{successMsg}</p>}
        </div>
      </div>
    );
  };

  export default CreateProgressForm;
