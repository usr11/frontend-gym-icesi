import { baseurl } from "../../utils/constatn";

const createRoutine = async (routineData) => {
  const token = localStorage.getItem("accessToken");

  try {
    const response = await fetch(`${baseurl}/api/routines`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(routineData),
    });

    // Manejo seguro de errores
    if (!response.ok) {
      const raw = await response.text();
      console.log("RAW ERROR:", raw);

      let parsed;
      try {
        parsed = JSON.parse(raw);
      } catch {
        parsed = null;
      }

      throw new Error(
        parsed?.message ||
          parsed?.error ||
          raw ||
          "No se pudo crear la rutina"
      );
    }

    // Respuesta válida
    const result = await response.json();
    return result;

  } catch (error) {
    console.error("Error creando rutina:", error);
    throw error;
  }
};

export default createRoutine;
