import { baseurl } from "../../utils/constatn";

const getUserStatistics = async ({ userId }) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token no encontrado. Por favor inicia sesión nuevamente.");
    }

    const response = await fetch(`${baseurl}/api/statistics/users/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "No se pudieron obtener las estadísticas del usuario."
      );
    }

    return await response.json();
  } catch (error) {
    console.error("Error en getUserStatistics:", error);
    throw error;
  }
};

export default getUserStatistics;
