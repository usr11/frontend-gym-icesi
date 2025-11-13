import { useEffect, useState } from "react";
import Button from "../ui/Button";

const UserRoleList = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    // Simulación de usuarios cargados desde una API o base de datos
    setUsers([
      { id: "1", name: "Carlos Pérez", role: "estudiante" },
      { id: "2", name: "Laura García", role: "entrenador" },
      { id: "3", name: "María Gómez", role: "estudiante" },
      { id: "4", name: "José Martínez", role: "entrenador" },
    ]);
  }, []);

  const handleToggleRole = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((u) =>
        u.id === userId
          ? {
              ...u,
              role: u.role === "estudiante" ? "entrenador" : "estudiante",
            }
          : u
      )
    );

    const changedUser = users.find((u) => u.id === userId);
    if (changedUser) {
      setMessage({
        type: "success",
        text: `El usuario ${changedUser.name} cambió su rol a ${
          changedUser.role === "estudiante" ? "entrenador" : "estudiante"
        }.`,
      });
    }
  };

  return (
    <div className="flex flex-col p-10 gap-8 bg-background rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-primary text-center">
        Lista de Usuarios y Roles
      </h1>

      {/* Tabla o lista de usuarios */}
      <div className="overflow-x-auto rounded-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">ID</th>
              <th className="p-3 border-b">Nombre</th>
              <th className="p-3 border-b">Rol</th>
              <th className="p-3 border-b text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-gray-50 transition-colors border-b"
              >
                <td className="p-3">{user.id}</td>
                <td className="p-3">{user.name}</td>
                <td className="p-3 capitalize">{user.role}</td>
                <td className="p-3 text-center">
                  <Button
                    onClick={() => handleToggleRole(user.id)}
                    className={`${
                      user.role === "estudiante"
                        ? "bg-blue-500 hover:bg-blue-600"
                        : "bg-green-500 hover:bg-green-600"
                    } text-white py-1 px-3 rounded`}
                  >
                    Cambiar a{" "}
                    {user.role === "estudiante" ? "entrenador" : "estudiante"}
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mensaje de estado */}
      {message.text && (
        <div
          className={`text-center font-medium mt-4 ${
            message.type === "error" ? "text-red-500" : "text-green-500"
          }`}
        >
          {message.text}
        </div>
      )}
    </div>
  );
};

export default UserRoleList;
