import RoutineCard from "../components/routine/RoutineCard";
import ProgressExerciseComparison from "../components/progress/ProgressExerciseComparison";
import RoutineCalendar from "../components/routine/RoutineCalendar";
import { useAuth } from "../context/AuthContext";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/RoutineScreen.css";
import { useState } from "react";

const Home = () => {

    const [arrowsEnable, setArrowsEnable] = useState(true);
  const { user } = useAuth();
  const routines = [
    {
      id: "1",
      urlImg: "aaa",
      name: "Rutina 1",
      isCertified: false,
      startDate: "12/03/2020",
      createdBy: "Juan",
    },
    {
      id: "2",
      urlImg: "aaa",
      name: "Rutina 2",
      isCertified: true,
      startDate: "12/03/2020",
      createdBy: "Pablo",
    },
  ];

    const settingsSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: arrowsEnable,
  };

  return (
    <div className="h-auto">
      <div className=" p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-5">Holaa {user?.name}</h2>
        <h2 className="text-xl mb-10">Rutinas mas usadas</h2>
        <div className="routine-slider">
          <Slider {...settingsSlide}>
            {routines.length !== 0 &&
              routines.map((routine) => (
                <RoutineCard key={routine.id} routine={routine} />
              ))}
          </Slider>
        </div>
        {/* <div className="mt-15 ">
          <h2 className="text-xl mb-10">Calendario</h2>
          <div className="bg-blue-200 h-70 m-10">
            
          </div>
        </div> */}
      </div>
      <div className=" p-15 rounded-md bg-background shadow-md mt-10">
        <h2 className="text-3xl mb-10">Progreso reciente</h2>
        <div className="">
          <ProgressExerciseComparison />
        </div>
      </div>
    </div>
  );
};

export default Home;
