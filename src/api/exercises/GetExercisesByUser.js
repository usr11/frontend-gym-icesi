import { baseurl } from "../../utils/constatn";

// const GetExercisesByUser = ({userId}) => {
//   return exercises;
// };

// export default GetExercisesByUser;

// const exercises = [
//   {
//     id: "1",
//     name: "Press banca",
//     urlImg: "",
//     difficulty: 2,
//     isPredefined: true,
//     createdBy: "Ronnie Coleman",
//     urlVideo:"https://www.w3schools.com/html/mov_bbb.mp4"
//   },
//   {
//     id: "2",
//     name: "Press militar",
//     urlImg: "",
//     difficulty: 4,
//     isPredefined: false,
//     createdBy: "CBUM",
//   },
//   {
//     id: "3",
//     name: "Prensa",
//     urlImg: "",
//     difficulty: 1,
//     isPredefined: true,
//     createdBy: "Andoni",
//   },
//   {
//     id: "4",
//     name: "Sentadilla",
//     urlImg: "",
//     difficulty: 5,
//     isPredefined: false,
//     createdBy: "El campeon",
//   },
// ];



const getExercisesByUser = async ({ userId }) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token no encontrado. Por favor inicia sesión nuevamente.");
    }

    const response = await fetch(`${baseurl}/api/exercises/byUser/${userId}`, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "No se pudieron obtener los ejercicios del usuario.");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en GetExercisesByUser:", error);
    throw error;
  }
};

export default getExercisesByUser;
