import { baseurl } from "../../utils/constatn";

const changeUserRole = async ({ username, role }) => {
  const token = localStorage.getItem("accessToken");

  const res = await fetch(`${baseurl}/api/users/${username}/role`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ newRole: role }),
  });

  if (!res.ok) throw new Error("Error al cambiar rol");

  return res.json();
};

export default changeUserRole;
