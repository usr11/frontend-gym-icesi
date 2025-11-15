import { baseurl } from "../../utils/constatn";

const CreateProgress = async (progressData) => {
  
  const token = localStorage.getItem("accessToken");

  try {
    console.log(JSON.stringify(progressData));
    const response = await fetch(`${baseurl}/api/progress`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
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
