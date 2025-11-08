import { useState } from "react";
import Button from "../ui/Button";
import Input from "../ui/Input";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    console.log(username)
    console.log(password)
    //try
  };

  return (
    <div className="flex flex-col gap-10 w-80">
      <h2 className="font-bold m-auto text-3xl text-primary">Log In</h2>
      <div className="flex flex-col gap-7">
        <Input text="username" onChange={(e) => setUsername(e.target.value)} />
        <Input
          text="password"
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
    </div>
  );
};

export default LoginForm;
