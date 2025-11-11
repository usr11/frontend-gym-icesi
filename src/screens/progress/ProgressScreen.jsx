import ProgressComparison from "../../components/progress/ProgressComparison";
import ProgressRecord from "../../components/progress/ProgressRecord";
import CreateProgressForm from "../../components/progress/CreateProgressForm";

const ProgressScreen = () => {
  return (
    <div className="h-auto">
      <div className="p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl mb-5">Tu progreso</h2>
        <div className="">
          <ProgressComparison />
        </div>
      </div>
      <div className="mt-15 p-15 rounded-md bg-background shadow-md">
        <h2 className="text-3xl">Ultimos registro</h2>
        <div className="">
          <ProgressRecord />
        </div>
      </div>
      <div className="p-15 rounded-md mt-10 shadow-md bg-background">
        <h2 className="text-3xl mb-10">Registrar progreso</h2>
        <CreateProgressForm />
      </div>
    </div>
  );
};

export default ProgressScreen;
