import { baseurl } from "../../utils/constatn";

const getAllStudents = async () => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${baseurl}/api/users/students`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!res.ok) throw new Error("No se pudieron obtener los estudiantes");
  return res.json();
};

export default getAllStudents;
