import RoutineCard from "../../components/routine/RoutineCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/RoutineScreen.css";
import { useState } from "react";
import CreateRoutineForm from "../../components/routine/CreateRoutineForm";

const RoutineScreen = () => {
  //CUANDO LOS LLAME Y SEAM MAS DE 3 PASA A SER TRUE
  const [arrowsEnable, setArrowsEnable] = useState(true);

  const settingsSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: arrowsEnable,
  };

  const routines = [
    {
      id: "1",
      urlImg: "aaa",
      name: "Rutina 1",
      description: "Esta es una descripcion sencilla",
      isCertified: false,
      isPredefined: true,
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
    {
      id: "3",
      urlImg: "aaa",
      name: "Rutina 3",
      isCertified: false,
      startDate: "12/03/2020",
      createdBy: "Sebastian",
    },
    {
      id: "4",
      urlImg: "aaa",
      name: "Rutina 4",
      isCertified: true,
      startDate: "12/03/2020",
      createdBy: "Miguel",
    },
  ];

  return (
    <div className="h-auto">
      <div className=" p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-10">Rutinas activas</h2>
        <div className="routine-slider">
          <Slider {...settingsSlide}>
            {routines.length !== 0 &&
              routines.map((routine) => (
                <RoutineCard key={routine.id} routine={routine} />
              ))}
          </Slider>
        </div>
      </div>

      <div className=" mt-15 p-15 rounded-md shadow-md bg-background">
        <h2 className="text-3xl mb-10">Crear rutina</h2>
        <div className="  m-5 py-10 ">
          <CreateRoutineForm />
        </div>
      </div>
      <div className=" mt-15 p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-10">Otras rutinas</h2>
        <div className="routine-slider">
          <Slider {...settingsSlide}>
            {routines.length !== 0 &&
              routines.map((routine) => (
                <RoutineCard
                  key={routine.id}
                  routine={routine}
                  lessInfo={true}
                />
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default RoutineScreen;
