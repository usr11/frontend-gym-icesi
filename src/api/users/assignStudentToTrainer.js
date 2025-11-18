import { baseurl } from "../../utils/constatn";

const assignStudentToTrainer = async ({ studentUsername, trainerUsername }) => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${baseurl}/api/users/assign`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      studentUsername,
      trainerUsername,
    }),
  });

  if (!res.ok) throw new Error("Error al asignar estudiante");
  return res.json();
};

export default assignStudentToTrainer;
