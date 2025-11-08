import LoginForm from "../../components/auth/LoginForm";
import TextType from "../../components/external/TextType";
import Magnet from "../../components/external/Magnet";

const LoginScreen = () => {
  return (
    <div className="flex">
      {/* Seccion derecha */}
      <div className="h-screen overflow-hidden cursor-default">
        <div className="mx-20 pb-15 px-30 flex flex-col items-center justify-center h-screen">
          {/* <div className="text-4xl font-bold text-primary mb-10">
            <TrueFocus
              sentence="GYM Icesi"
              manualMode={false}
              blurAmount={5}
              borderColor="silver"
              animationDuration={2}
              pauseBetweenAnimations={2}
            />
          </div> */}
          {/* <Magnet padding={500} disabled={false} magnetStrength={40}></Magnet> */}
          <p className="text-4xl pb-20 whitespace-nowrap">GYM icesi</p>
          <LoginForm />
        </div>
      </div>

      {/* Seccion izquierda */}
      <div className="relative w-screen h-screen  border-l-5 border-primary overflow-hidden">
        <img
          src="/gymimg.avif "
          alt="LoginImage"
          className="relative inset-0 w-full h-full object-cover"
        />
        <div className="absolute text-3xl text-background font-bold  top-10 ml-10 py-5 px-15 border border-primary rounded-sm backdrop-blur-sm">
          <TextType
            text={[
              "Welcome to GYM Icesi",
              "The best side for fit life",
              "Happy train!!!",
              "...",
            ]}
            typingSpeed={80}
            pauseDuration={2000}
            showCursor={true}
            cursorCharacter="_"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
