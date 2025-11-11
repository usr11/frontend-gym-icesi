import { useState } from "react";
import { Link } from "react-router-dom";

const ProfileScreen = () => {
  const [user, setUser] = useState({});

  return (
    <div className=" p-15 rounded-md shadow-md">
      <div className=" flex flex-row justify-between">
        <p className="my-auto text-xl">Hola {user.username}</p>
        <Link >
          <button className="bg-red-400 py-3 px-4 text-primary rounded-md cursor-pointer hover:-translate-y-1 transition-all ease-in duration-100">Cerrar sesion</button>
        </Link>
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
