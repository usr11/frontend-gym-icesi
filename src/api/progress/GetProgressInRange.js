// const GetProgressInRange = ({startDate, endDate, exercise}) => {

//   if(exercise === "Press de banca"){
//     return pressList
//   } else if (exercise === "Sentadilla"){
//     return senList
//   } else if (exercise === "Abdominales"){
//     return absList
//   } else if (exercise === "Running"){
//     return runList
//   } else {
//     throw new Error("a")
//   }

// }

// export default GetProgressInRange;

// const pressList = [
//   { date: "2025-10-01", reps: 1, sets: 3, weight: 6, effortLevel: 6, exercise: {name: "Press de banca"}},
//   { date: "2025-10-08", reps: 1, sets: 4, weight: 6, effortLevel: 7, exercise: {name: "Press de banca"}},
//   { date: "2025-10-15", reps: 1, sets: 4, weight: 7, effortLevel: 8, exercise: {name: "Press de banca"}},
//   { date: "2025-10-15", reps: 1, sets: 4, weight: 7, effortLevel: 8, exercise: {name: "Press de banca"}},
// ];

// const senList = [
//   { date: "2025-10-01", reps: 10, sets: 3, weight: 60, effortLevel: 6, exercise: {name: "Sentadilla"}},
//   { date: "2025-10-08", reps: 10, sets: 4, weight: 65, effortLevel: 7, exercise: {name: "Sentadilla"}},
//   { date: "2025-10-15", reps: 14, sets: 4, weight: 70, effortLevel: 8, exercise: {name: "Sentadilla"}},
//   { date: "2025-10-15", reps: 14, sets: 4, weight: 70, effortLevel: 8, exercise: {name: "Sentadilla"}},
// ];

// const absList = [
//   { date: "2025-10-01", reps: 100, sets: 3, weight: 600, effortLevel: 6, exercise: {name: "abs"}},
//   { date: "2025-10-08", reps: 100, sets: 4, weight: 650, effortLevel: 7, exercise: {name: "abs"}},
//   { date: "2025-10-15", reps: 140, sets: 4, weight: 700, effortLevel: 8, exercise: {name: "abs"}},
//   { date: "2025-10-15", reps: 140, sets: 4, weight: 700, effortLevel: 8, exercise: {name: "abs"}},
// ];

// const runList = [
//   { date: "2025-10-01", time: 100, distance: 3, rhythm: 600, effortLevel: 6, exercise: {name: "run"}},
//   { date: "2025-10-08", time: 100, distance: 10, rhythm: 650, effortLevel: 7, exercise: {name: "run"}},
//   { date: "2025-10-15", time: 140, distance: 15, rhythm: 700, effortLevel: 8, exercise: {name: "run"}},
//   { date: "2025-10-15", time: 140, distance: 50, rhythm : 700, effortLevel: 8, exercise: {name: "run"}},
// ];

import { baseurl } from "../../utils/constatn";

const GetProgressInRange = async ({ dateStart, dateEnd, exercise }) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      throw new Error("Token no encontrado. Por favor inicia sesión nuevamente.");
    }

    // 🟡 construimos el endpoint con los parámetros
    const response = await fetch(
      `${baseurl}/api/progress/range?startDate=${dateStart}&endDate=${dateEnd}&exerciseName=${encodeURIComponent(
        exercise
      )}`,
      {
        method: "GET",
        headers: {
          "Authorization": `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(
        errorData.message || "No se pudieron obtener los progresos en el rango especificado."
      );
    }

    const data = await response.json();

    // 🔧 Normalizamos el formato de datos al que tu gráfico ya usa:
    const formattedData = data.map((item) => ({
      date: item.completedAt?.split("T")[0] || item.createdAt?.split("T")[0],
      reps: item.reps,
      sets: item.sets,
      weight: item.weight,
      time: item.time,
      distance: item.distance,
      effortLevel: item.effortLevel,
      exercise: { name: item.exerciseName },
    }));

    return formattedData;
  } catch (error) {
    console.error("Error en GetProgressInRange:", error);
    throw error;
  }
};

export default GetProgressInRange;
