import { baseurl } from "../../utils/constatn";

const getAllTrainers = async () => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${baseurl}/api/users/trainers`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("No se pudieron obtener los entrenadores");
  return res.json();
};

export default getAllTrainers;
