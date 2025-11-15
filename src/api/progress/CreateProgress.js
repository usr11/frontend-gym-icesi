// import { API_URL } from "../config"; // Ajusta según tu estructura (ej: import.meta.env.VITE_API_URL)
// import { getAccessToken } from "../../utils/auth"; // O como estés guardando tu token
import { baseurl } from "../../utils/constatn";

const CreateProgress = async (progressData) => {
  try {
    const token = localStorage.getItem("accessToken");; // Si usas AuthContext, puedes pasar el token por parámetro en vez de importarlo aquí

    console.log(JSON.stringify(progressData))
    const response = await fetch(`${baseurl}/api/progress`, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(progressData),
    });

    if (!response.ok) {
      throw new Error("Error al registrar el progreso");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en CreateProgress:", error);
    throw error;
  }
};

export default CreateProgress;
