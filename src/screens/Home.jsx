import RoutineCard from "../components/routine/RoutineCard";
import ProgressExerciseComparison from "../components/progress/ProgressExerciseComparison";
import RoutineCalendar from "../components/routine/RoutineCalendar";


const Home = () => {
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

  return (
    <div className="h-auto">
      <div className=" p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-5">Holaa Juan!!!</h2>
        <h2 className="text-xl mb-5">Tus rutinas frecuentes</h2>

        <div className="grid grid-cols-3 gap-10 ">
          {routines.length !== 0 &&
            routines.map((routine) => (
              <RoutineCard key={routine.id} routine={routine} />
            ))}
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
