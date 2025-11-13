import RoutineCard from "../../components/routine/RoutineCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/RoutineScreen.css";
import { useState, useEffect } from "react";
import CreateRoutineForm from "../../components/routine/CreateRoutineForm";
import getRoutinesByUser from "../../api/routines/RoutinesByUser";
import { useAuth } from "../../context/AuthContext";
import getComplementaryRoutinesByUser from "../../api/routines/ComplementaryRoutinesByUser";

const RoutineScreen = () => {
  //CUANDO LOS LLAME Y SEAM MAS DE 3 PASA A SER TRUE
  const { user } = useAuth();
  const [arrowsEnable, setArrowsEnable] = useState(true);
  const [routines, setRoutines] = useState([]);
  const [unActiveroutines, setUnActiveRoutines] = useState([]);

  const settingsSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: arrowsEnable,
  };

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        console.log(user?.id);

        const data = await getRoutinesByUser({ userId: user?.id });
        const dataC = await getComplementaryRoutinesByUser({
          userId: user?.id,
        });

        console.log(data);
        console.log(dataC);
        setRoutines(data);
        setUnActiveRoutines(dataC);
        
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchRoutines();
  }, []);
  const routinesEx = [
    {
      id: "1",
      urlImg:
        "https://www.glofox.com/wp-content/uploads/2021/02/gym-website.jpg",
      name: "Rutina 1",
      description: "Esta es una descripcion sencilla",
      isCertified: false,
      isPredefined: true,
      startDate: "12/03/2020",
      createdBy: "Juan",
    },
    {
      id: "2",
      urlImg:
        "https://www.glofox.com/wp-content/uploads/2021/02/gym-website.jpg",
      name: "Rutina 2",
      isCertified: true,
      startDate: "12/03/2020",
      createdBy: "Pablo",
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
