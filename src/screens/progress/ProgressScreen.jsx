import { useEffect, useContext } from "react";
import ProgressComparison from "../../components/progress/ProgressComparison";
import ProgressRecord from "../../components/progress/ProgressRecord";
import CreateProgressForm from "../../components/progress/CreateProgressForm";
import GetProgressByUser from "../../api/progress/GetProgressByUser";
import { useAuth } from "../../context/AuthContext";
import { ProgressContext } from "../../context/ProgressContext";

const ProgressScreen = () => {
  const { user } = useAuth();
  const { setProgressList } = useContext(ProgressContext);

  useEffect(() => {
    const fetchProgress = async () => {
      try {
        const data = await GetProgressByUser({ userId: user?.username });
        setProgressList(data);
      } catch (error) {
        console.error("Error cargando progresos:", error);
      }
    };
    fetchProgress();
  }, [user]);

  return (
    <div className="h-auto">
      <div className="p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-5">Tus avances</h2>
        <ProgressComparison />
      </div>

      <div className="mt-15 p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl">Tus progresos</h2>
        <ProgressRecord />
      </div>

      <div className="p-15 rounded-md mt-10 shadow-md bg-background">
        <h2 className="text-3xl mb-10">Registrar progreso</h2>
        <CreateProgressForm />
      </div>
    </div>
  );
};

export default ProgressScreen;
