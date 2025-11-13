const GetProgressByUser = ({userId}) => {
  return records
}

export default GetProgressByUser;


  const records = [
    {
      id: 1,
      date: "2025-11-01",
      exercise: "Press de banca",
      reps: 12,
      sets: 4,
      weight: 65,
      effortLevel: 7,
    },
    {
      id: 2,
      date: "2025-10-28",
      exercise: "Sentadillas",
      reps: 10,
      sets: 3,
      weight: 80,
      effortLevel: 8,
    },
    {
      id: 3,
      date: "2025-10-25",
      exercise: "Trote",
      time: "25 min",
      distance: "4 km",
      rhythm: 90,
      effortLevel: 6,
    },
    {
      id: 4,
      date: "2025-10-20",
      exercise: "Peso muerto",
      reps: 8,
      sets: 3,
      weight: 90,
      effortLevel: 7,
    },
    {
      id: 5,
      date: "2025-10-15",
      exercise: "Press militar",
      reps: 10,
      sets: 3,
      weight: 40,
      effortLevel: 6,
    },
    {
      id: 6,
      date: "2025-10-10",
      exercise: "Trote",
      time: "20 min",
      distance: "3.5 km",
      effortLevel: 5,
    },
  ];


// import { baseurl } from "../../utils/constatn";

// const GetProgressByUser = async ({ userId }) => {
//   try {
//     const token = localStorage.getItem("accessToken");

//     if (!token) {
//       throw new Error("Token no encontrado. Por favor inicia sesión nuevamente.");
//     }

//     const response = await fetch(`${baseurl}/api/progress/user/${userId}`, {
//       method: "GET",
//       headers: {
//         "Authorization": `Bearer ${token}`,
//         "Content-Type": "application/json",
//       },
//     });

//     if (!response.ok) {
//       const errorData = await response.json().catch(() => ({}));
//       throw new Error(errorData.message || "No se pudieron obtener los progresos del usuario.");
//     }

//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error("Error en GetExercisesByUser:", error);
//     throw error;
//   }
// };

// export default GetProgressByUser;
