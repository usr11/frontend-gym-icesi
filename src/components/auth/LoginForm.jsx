import { useState, useEffect } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";
import login from "../../api/auth/Login";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login: setAuthUser } = useAuth();
  const navigate = useNavigate();
  const { user } = useAuth();

  const location = useLocation();

  // No permite ir al login cuando se esta logedo
  useEffect(() => {
    if (user && location.pathname === "/login") {
      if (user.role === "admin") {
        navigate("/managment", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    }
  }, [user, navigate, location.pathname]);

  const handleLogin = async () => {
    try {
      login({ username, password })
      // const response = await login({ username, password });
      // setAuthUser(response.user, response.token);

      // if (response.user.role === "admin") {
      //   navigate("/managment", { replace: true });
      // } else {
      //   navigate("/", { replace: true });
      // }
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="flex flex-col gap-10 w-80">
      <h2 className="font-bold m-auto text-3xl text-primary">Log In</h2>
      <div className="flex flex-col gap-7">
        <Input text="Nombre de usuario" onChange={(e) => setUsername(e.target.value)} />
        <Input
          text="Contraseña"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className="flex flex-col gap-3 text-primary ">
        <Button onClick={handleLogin}>Log In</Button>
        <p className="font-bold transition-all duration-300 ease-in-out hover:underline hover:cursor-pointer">
          Recover password? Click Here
        </p>
      </div>
      <div>{error}</div>
    </div>
  );
};

export default LoginForm;
