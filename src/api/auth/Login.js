// const login = async ({ username, password }) => {

//   await new Promise((resolve) => setTimeout(resolve, 500));

//   const users = [
//     { id: "1", name: "Carlitos", role: "estudiante", username: "estudiante", password: "1234" },
//     { id: "2", name: "Laura", role: "entrenador", username: "entrenador", password: "1234" },
//     { id: "3", name: "Admin", role: "admin", username: "admin", password: "1234" },
//   ];

//   const user = users.find(
//     (u) => u.username === username && u.password === password
//   );

//   if (!user) {
//     throw new Error("Credenciales incorrectas");
//   }

//   const token = `fake-token-${user.role}-${Date.now()}`;

//   return { user, token };
// };

// export default login;

import { baseurl } from "../../utils/constatn";

const login = async ({ username, password }) => {
  const body = JSON.stringify({ username, password });

  const response = await fetch(`${baseurl}/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body,
  });

  if (!response.ok) {
    throw new Error("Credenciales incorrectas o error en el servidor");
  }

  const data = await response.json();

  console.log(data);

  const token = data.token;
  const user = {
    id: data.userId,
    name: data.fullName,
    role: data.role,
    username: data.username,
    email:data.email
  };

  console.log(user);

  if (!token || !user) {
    throw new Error("Respuesta inválida del servidor");
  }

  return { user, token };
};

export default login;
