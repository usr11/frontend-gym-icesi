
const login = async ({ username, password }) => {

  await new Promise((resolve) => setTimeout(resolve, 500));


  const users = [
    { id: "1", name: "Carlitos", role: "estudiante", username: "estudiante", password: "1234" },
    { id: "2", name: "Laura", role: "entrenador", username: "entrenador", password: "1234" },
    { id: "3", name: "Admin", role: "admin", username: "admin", password: "1234" },
  ];

  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (!user) {
    throw new Error("Credenciales incorrectas");
  }

  const token = `fake-token-${user.role}-${Date.now()}`;

  return { user, token };
};

export default login;
