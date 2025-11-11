const GetProgressInRange = ({startDate, endDate, exercise}) => {

  if(exercise === "Press de banca"){
    return pressList
  } else if (exercise === "Sentadilla"){
    return senList
  } else if (exercise === "Abdominales"){
    return absList
  } else if (exercise === "Running"){
    return runList
  } else {
    throw new Error("a")
  }

}

export default GetProgressInRange;

const pressList = [
  { date: "2025-10-01", reps: 1, sets: 3, weight: 6, effortLevel: 6, exercise: {name: "Press de banca"}},
  { date: "2025-10-08", reps: 1, sets: 4, weight: 6, effortLevel: 7, exercise: {name: "Press de banca"}},
  { date: "2025-10-15", reps: 1, sets: 4, weight: 7, effortLevel: 8, exercise: {name: "Press de banca"}},
  { date: "2025-10-15", reps: 1, sets: 4, weight: 7, effortLevel: 8, exercise: {name: "Press de banca"}},
];

const senList = [
  { date: "2025-10-01", reps: 10, sets: 3, weight: 60, effortLevel: 6, exercise: {name: "Sentadilla"}},
  { date: "2025-10-08", reps: 10, sets: 4, weight: 65, effortLevel: 7, exercise: {name: "Sentadilla"}},
  { date: "2025-10-15", reps: 14, sets: 4, weight: 70, effortLevel: 8, exercise: {name: "Sentadilla"}},
  { date: "2025-10-15", reps: 14, sets: 4, weight: 70, effortLevel: 8, exercise: {name: "Sentadilla"}},
];

const absList = [
  { date: "2025-10-01", reps: 100, sets: 3, weight: 600, effortLevel: 6, exercise: {name: "abs"}},
  { date: "2025-10-08", reps: 100, sets: 4, weight: 650, effortLevel: 7, exercise: {name: "abs"}},
  { date: "2025-10-15", reps: 140, sets: 4, weight: 700, effortLevel: 8, exercise: {name: "abs"}},
  { date: "2025-10-15", reps: 140, sets: 4, weight: 700, effortLevel: 8, exercise: {name: "abs"}},
];

const runList = [
  { date: "2025-10-01", time: 100, distance: 3, rhythm: 600, effortLevel: 6, exercise: {name: "run"}},
  { date: "2025-10-08", time: 100, distance: 10, rhythm: 650, effortLevel: 7, exercise: {name: "run"}},
  { date: "2025-10-15", time: 140, distance: 15, rhythm: 700, effortLevel: 8, exercise: {name: "run"}},
  { date: "2025-10-15", time: 140, distance: 50, rhythm : 700, effortLevel: 8, exercise: {name: "run"}},
];