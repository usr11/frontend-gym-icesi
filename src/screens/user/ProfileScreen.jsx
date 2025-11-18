import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import getUserStatistics from "../../api/statistics/getUserStatistics";

const ProfileScreen = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const [userData, setUserData] = useState(null);
  const [stats, setStats] = useState([]); // ← AQUÍ GUARDAMOS LAS ESTADÍSTICAS
  const [loadingStats, setLoadingStats] = useState(true);
  const [errorStats, setErrorStats] = useState(null);

  useEffect(() => {
    if (user) {
      setUserData(user);

      // 🔥 Llamar API de estadísticas
      fetchUserStats(user.id);
    }
  }, [user]);

  const fetchUserStats = async (userId) => {
    try {
      setLoadingStats(true);
      const data = await getUserStatistics({ userId });
      setStats(data);
    } catch (error) {
      setErrorStats(error.message);
    } finally {
      setLoadingStats(false);
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/auth/login");
  };

  return (
    <div className="p-15 rounded-md shadow-md">
      <div className="flex flex-row justify-between">
        <p className="my-auto text-xl">Hola {user.username}</p>

        <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-3 px-4 rounded-md cursor-pointer hover:-translate-y-1 transition-all ease-in duration-100"
        >
          Cerrar sesión
        </button>
      </div>

      {/* INFORMACIÓN DEL USUARIO */}
      <div className="mt-10">
        <p className="text-xl">Tu información:</p>
        <div className="mt-5 flex flex-col gap-3">
          <p>
            {user.name} {user.lastname}
          </p>
          <p>
            Correo Electrónico: <span>{user.email}</span>
          </p>
          <p>
            Rol: <span>{user.role}</span>
          </p>
        </div>
      </div>

      {/* ESTADÍSTICAS */}
      <div className="mt-10">
        <p className="text-xl">Estadísticas:</p>

        {loadingStats && <p>Cargando estadísticas...</p>}

        {errorStats && (
          <p className="text-red-500 mt-2">Error: {errorStats}</p>
        )}

        {!loadingStats && stats.length === 0 && (
          <p className="text-gray-500 mt-3">No hay estadísticas registradas.</p>
        )}

        {/* LISTADO DE ESTADÍSTICAS */}
        <div className="mt-5 flex flex-col gap-4">
          {stats.map((s) => (
            <div
              key={s.id}
              className="border p-4 rounded-md bg-white/10 backdrop-blur-md shadow-md"
            >
              <p><strong>Año:</strong> {s.year}</p>
              <p><strong>Mes:</strong> {s.month}</p>
              <p><strong>Rutinas empezadas:</strong> {s.routinesStarted}</p>
              <p><strong>Registros de progreso:</strong> {s.progressLogsCount}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
