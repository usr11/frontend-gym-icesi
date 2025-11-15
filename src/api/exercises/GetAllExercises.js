import { baseurl } from "../../utils/constatn";

const getAllExercises = async () => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token no encontrado. Por favor inicia sesión nuevamente.");
    }

    const response = await fetch(`${baseurl}/api/exercises/all`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "No se pudieron obtener los ejercicios.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en GetExercisesByUser:", error);
    throw error;
  }
};

export default getAllExercises;
