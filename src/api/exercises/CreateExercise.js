import { baseurl } from "../../utils/constatn";

const createExercise = async (exerciseData) => {
  try {
    const response = await fetch(`${baseurl}/api/v1/exercises/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(exerciseData),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "No se pudo crear el ejercicio");
    }

    return await response.json();
  } catch (error) {
    console.error("Error creando ejercicio:", error);
    throw error;
  }
};

export default createExercise;
