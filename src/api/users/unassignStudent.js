import { baseurl } from "../../utils/constatn";

const unassignStudent = async (studentUsername) => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(
    `${baseurl}/api/users/students/${studentUsername}/assignment`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    }
  );

  if (!res.ok) throw new Error("Error al desasignar estudiante");
};

export default unassignStudent;
