import { NavbarDemo } from "../components/nav/NavbarDemo";
import { Outlet } from "react-router-dom";
import DotGrid from "../components/external/DotGrid";

const HomeScreen = () => {
  return (
    <div className="relative w-full">
      <div className="fixed inset-0 -z-10">
        <DotGrid
          dotSize={3}
          gap={30}
          baseColor="#E2E8F0"
          activeColor="#0b2447"
          proximity={120}
          shockRadius={350}
          shockStrength={5}
          resistance={750}
          returnDuration={3.5}
        />
      </div>
      <NavbarDemo />
      <main className="p-10 mt-15 mx-25">
        <Outlet />
      </main>
      <footer className="h-30 bg-secondary-light flex">
        <div className="m-auto">
          <p>Ⓒ 2025. Gym icesi. Reservados todos los derechos</p>
        </div>
      </footer>
    </div>
  );
};

export default HomeScreen;
