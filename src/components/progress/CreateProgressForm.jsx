import Input from "../ui/Input";
import Button from "../ui/Button";
import { useState } from "react";

const CreateProgressForm = () => {
  const [exerciseType, setExerciseType] = useState("fuerza");
  const [effortLevel, setEffortLevel] = useState(5);

  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-around px-10">
        <div className="flex flex-col gap-10 w-100  justify-center p-5 rounded-md ">
          <Input text="Fecha" type="date" />
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
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary outline-none"
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
              name="exercise"
              id="exercise"
              className="w-full border border-gray-300 rounded-md p-2 focus:ring-2 focus:ring-primary outline-none"
              onChange={(e) => setExerciseType(e.target.value)}
            >
              <option value="fuerza">Fuerza (pesas, repeticiones)</option>
              <option value="cardio">Cardio (tiempo, distancia)</option>
            </select>
          </div>
        </div>

        {/* Métricas */}
        <div className="flex flex-col gap-10 w-100 justify-center p-5 rounded-md ">
          {exerciseType === "fuerza" ? (
            <>
              <Input text="Peso (kg)" type="number" />
              <Input text="Repeticiones" type="number" />
              <Input text="Series" type="number" />
            </>
          ) : (
            <>
              <Input text="Ritmo (min)" type="number" />
              <Input text="Tiempo (min)" type="number" />
              <Input text="Distancia (km)" type="number" />
            </>
          )}

          <div>
            <label
              htmlFor="effort"
              className="block font-semibold text-primary"
            >
              Nivel de esfuerzo:{" "}
              <span className="font-bold text-primary underline">
                {effortLevel}
              </span>
            </label>
            <input
              type="range"
              min="1"
              max="10"
              step="1"
              value={effortLevel}
              onChange={(e) => setEffortLevel(e.target.value)}
              className="w-full mt-5 range-slider"
            />
          </div>
        </div>
      </div>

      {/* Botón de acción */}
      <div className="w-200 mx-auto">
        <Button>Registrar progreso</Button>
      </div>
    </div>
  );
};

export default CreateProgressForm;
