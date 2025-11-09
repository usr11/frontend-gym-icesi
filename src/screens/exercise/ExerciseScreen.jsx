import ExerciseCard from "../../components/exercise/ExerciseCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../styles/RoutineScreen.css";
import { useState } from "react";
import CreateExerciseForm from "../../components/exercise/CreateExerciseForm";

const ExerciseScreen = () => {
  const [arrowsEnable, setArrowsEnable] = useState(true);

  const settingsSlide = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: arrowsEnable,
  };

  const exercises = [
    {
      id: "1",
      name: "Press banca",
      urlImg: "",
      difficulty: 2, 
      isPredefined: true, 
      createdBy: "Ronnie Coleman"
    },
    {
      id: "2",
      name: "Press militar",
      urlImg: "",
      difficulty: 4, 
      isPredefined: false, 
      createdBy: "CBUM"
    },
    {
      id: "3",
      name: "Prensa",
      urlImg: "",
      difficulty: 1, 
      isPredefined: true, 
      createdBy: "Andoni"
    },
    {
      id: "4",
      name: "Sentadilla",
      urlImg: "",
      difficulty: 5, 
      isPredefined: false, 
      createdBy: "El campeon"
    }
  ]

  return (
    <div className="h-auto">
      <div className="bg-amber-200 p-3">
        <h2 className="text-3xl mb-10">Ejercicios favoritos</h2>
        <div className="routine-slider">
          <Slider {...settingsSlide}>
            {exercises.length !== 0 &&
              exercises.map((exercise) => (
                <ExerciseCard key={exercise.id} exercise={exercise}  />
              ))}
          </Slider>
        </div>
      </div>

      <div className="bg-green-200 mt-15">
        <h2 className="text-3xl mb-10">Crear ejercicio</h2>
        <div className=" bg-blue-200 m-5 py-10 ">
              <CreateExerciseForm/>
        </div>
      </div>
    </div>
  );
};

export default ExerciseScreen;
