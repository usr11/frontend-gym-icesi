import RelationUserTrainer from "../../components/user/RelationUserTrainer";
import UserRoleList from "../../components/user/UserRole";

const ManagmentUserScreen = () => {
  return (
    <div className="flex flex-col gap-10 p-10">
      <RelationUserTrainer />
      <UserRoleList/>
    </div>
  );
};

export default ManagmentUserScreen;
