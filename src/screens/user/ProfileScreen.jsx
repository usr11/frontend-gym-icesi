import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const ProfileScreen = () => {  
  const { user, logout } = useAuth(); 
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

    useEffect(() => {
    if (user) {
      setUserData(user);
    }
  }, [user]);

  const handleLogout = () => {
    logout();         // borra del contexto y localStorage
    navigate("/auth/login"); // redirige al login
  };

  return (
    <div className=" p-15 rounded-md shadow-md">
      <div className=" flex flex-row justify-between">
        <p className="my-auto text-xl">Hola {user.username}</p>
                <button
          onClick={handleLogout}
          className="bg-red-500 text-white py-3 px-4 rounded-md cursor-pointer hover:-translate-y-1 transition-all ease-in duration-100"
        >
          Cerrar sesión
        </button>
      </div>
      <div className=" mt-10 ">
        <p className="text-xl">Tu informacion:</p>
        <div className="mt-5 flex flex-col gap-3">
          <p>
            {user.name}
            {user.lastname}
          </p>
          <p>
            Correo Electronico: <span>{user.email}</span>
          </p>
          <p>
            Rol: <span>{user.role}</span>
          </p>
        </div>
      </div>
      <div className=" mt-10">
        <p className="text-xl">Estadisticas:</p>
        <div>
          <p>a</p>
          <p>a</p>
          <p>a</p>
          <p>a</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileScreen;
