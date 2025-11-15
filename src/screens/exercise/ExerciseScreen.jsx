import ExerciseCard from "../../components/exercise/ExerciseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/RoutineScreen.css";
import { useEffect, useState } from "react";
import CreateExerciseForm from "../../components/exercise/CreateExerciseForm";
import getExercisesByUser from "../../api/exercises/GetExercisesByUser";
import getComplementaryExercises from "../../api/exercises/GetComplementaryExercises";
import { useAuth } from "../../context/AuthContext";

const ExerciseScreen = () => {
  const { user } = useAuth();
  const [arrowsEnable, setArrowsEnable] = useState(true);
  const [activeExercises, setActiveExercises] = useState([]);
  const [unActiveExercises, setUnActiveExercises] = useState([]);

  const settingsSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: arrowsEnable,
  };

  const fetchExercises = async () => {
      try {
        console.log(user?.username);

        const data = await getExercisesByUser({ userId: user?.username });
        const dataComplementary = await getComplementaryExercises({
          userId: user?.id,
        });
        console.log("ejercicios propios:");
        console.log(data);
        console.log("todos lo ejercios");
        console.log(dataComplementary);
        setActiveExercises(data);
        setUnActiveExercises(dataComplementary);
      } catch (err) {
        console.error(err.message);
      }
    };

  useEffect(() => {
    

    fetchExercises();
  }, []);

  return (
    <div className="h-auto">
      <div className=" p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-10">Ejercicios practicados</h2>
        {activeExercises.length !== 0 ? (
          <div className="routine-slider">
          <Slider {...settingsSlide}>
            {activeExercises.length !== 0 &&
              activeExercises.map((exercise) => (
                <ExerciseCard
                  key={exercise.id}
                  exercise={exercise}
                  lessInfo={true}
                />
              ))}
          </Slider>
        </div>
        ) : (
          <p>No practicas ningun ejercicio</p>
        ) }
      </div>
      <div className=" mt-15 p-15 rounded-md shadow-md bg-background">
        <h2 className="text-3xl mb-10">Crear ejercicio</h2>
        <div className="  m-5 py-10 ">
          <CreateExerciseForm fetchExercises={fetchExercises}/>
        </div>
      </div>
      <div className=" mt-15 p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-10">Ejercicios sugeridos</h2>
        {unActiveExercises.length !== 0 ? (
          <div className="routine-slider">
            <Slider {...settingsSlide}>
              {unActiveExercises.length !== 0 &&
                unActiveExercises.map((exercise) => (
                  <ExerciseCard key={exercise.id} exercise={exercise} />
                ))}
            </Slider>
          </div>
        ) : (
          <p>Cargando ejercicios..</p>
        )}
      </div>
    </div>
  );
};

export default ExerciseScreen;
