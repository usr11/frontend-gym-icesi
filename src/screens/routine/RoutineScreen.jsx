import RoutineCard from "../../components/routine/RoutineCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/RoutineScreen.css";
import { useState, useEffect, useContext } from "react";
import CreateRoutineForm from "../../components/routine/CreateRoutineForm";
import getRoutinesByUser from "../../api/routines/RoutinesByUser";
import { useAuth } from "../../context/AuthContext";
import getComplementaryRoutinesByUser from "../../api/routines/ComplementaryRoutinesByUser";
import { RoutineContext } from "../../context/RoutineContext";
const RoutineScreen = () => {
  const { user } = useAuth();
  // const [arrowsEnable, setArrowsEnable] = useState(true);
  const [routines, setRoutines] = useState([]);
  const [unActiveroutines, setUnActiveRoutines] = useState([]);

  const settingsSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  useEffect(() => {
    const fetchRoutines = async () => {
      try {
        console.log(user?.id);

        const data = await getRoutinesByUser({ userId: user?.id });
        const dataC = await getComplementaryRoutinesByUser({
          userId: user?.id,
        });

        console.log("Numero de rutinas que tiene" + data.length);
        console.log(data);
        console.log("Numero de rutinas que no tiene: " + dataC);
        console.log(dataC);
        setRoutines(data);
        setUnActiveRoutines(dataC);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchRoutines();
  }, []);

  return (
    <div className="h-auto">
      <div className=" p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-10">Rutinas activas</h2>
        {routines.length !== 0 ? (
          <div className="routine-slider">
            <Slider {...settingsSlide}>
              {routines.map((routine) => (
                <RoutineCard
                  key={routine.id}
                  routine={routine}
                  lessInfo={true}
                />
              ))}
            </Slider>
          </div>
        ) : (
          <p>No tienes rutinas</p>
        )}
      </div>

      <div className=" mt-15 p-15 rounded-md shadow-md bg-background">
        <h2 className="text-3xl mb-10">Crear rutina</h2>
        <div className="  m-5 py-10 ">
          <CreateRoutineForm />
        </div>
      </div>
      <div className=" mt-15 p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-10">Otras rutinas</h2>
        {unActiveroutines.length !== 0 ? (
          <div className="routine-slider">
            <Slider {...settingsSlide}>
              {unActiveroutines.map((routine) => (
                <RoutineCard
                  key={routine.id}
                  routine={routine}
                  lessInfo={true}
                />
              ))}
            </Slider>
          </div>
        ) : (
          <p>Cargando rutinas...</p>
        )}
      </div>
    </div>
  );
};

export default RoutineScreen;
