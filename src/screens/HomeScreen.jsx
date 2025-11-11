import { NavbarDemo } from "../components/nav/NavbarDemo";
import { Outlet } from "react-router-dom";
import DotGrid from "../components/external/DotGrid";
import { useNavigate } from "react-router-dom";

const HomeScreen = () => {

  const navigate = useNavigate()

  return (
    <div className="relative w-full">
      <div className="fixed inset-0 -z-10 bg-primary/5">
        {/* <DotGrid
          dotSize={3}
          gap={30}
          baseColor="#d9d9d9"
          activeColor="#0b2447"
          proximity={80}
          shockRadius={100}
          shockStrength={5}
          resistance={750}
          returnDuration={3.5}
        /> */}
      </div>
      <NavbarDemo />
      
      <main className="p-10 mt-15 mx-25">

        <Outlet />
      </main>
      
      <footer className="h-30 bg-background flex border-t-2 relative">
        <div className="absolute inset-0 bg-primary/15 flex items-center justify-center">
          <p>Ⓒ 2025. Gym icesi. Reservados todos los derechos</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
