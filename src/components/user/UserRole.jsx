import { useEffect, useState } from "react";
import Button from "../ui/Button";
import getAllStudents from "../../api/users/getAllStudents";
import getAllTrainers from "../../api/users/getAllTrainers";
import changeUserRole from "../../api/users/changeUserRole";

const UserRoleList = () => {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState({ type: "", text: "" });

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const students = await getAllStudents();
      const trainers = await getAllTrainers();

      const all = [
        ...students.map((s) => ({ ...s, role: "ESTUDIANTE" })),
        ...trainers.map((t) => ({ ...t, role: "ENTRENADOR" })),
      ];

      setUsers(all);
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  const handleToggleRole = async (username, currentRole) => {
    const newRole = currentRole === "ESTUDIANTE" ? "ENTRENADOR" : "ESTUDIANTE";

    try {
      const updated = await changeUserRole({ username, role: newRole });

      setUsers((prev) =>
        prev.map((u) =>
          u.username === username ? { ...u, role: newRole } : u
        )
      );

      setMessage({
        type: "success",
        text: `El usuario ${updated.fullName} ahora es ${newRole}`,
      });
    } catch (err) {
      setMessage({ type: "error", text: err.message });
    }
  };

  return (
    <div className="flex flex-col p-10 gap-8 bg-background rounded-xl shadow-md">
      <h1 className="text-3xl font-bold text-primary text-center">
        Lista de Usuarios y Roles
      </h1>

      <div className="overflow-x-auto rounded-md">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 border-b">Username</th>
              <th className="p-3 border-b">Nombre</th>
              <th className="p-3 border-b">Rol</th>
              <th className="p-3 border-b text-center">Acción</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.username} className="hover:bg-gray-50 border-b">
                <td className="p-3">{u.username}</td>
                <td className="p-3">{u.fullName}</td>
                <td className="p-3">{u.role}</td>
                <td className="p-3 text-center">
                  <Button
                    onClick={() => handleToggleRole(u.username, u.role)}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
                  >
                    Cambiar Rol
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
