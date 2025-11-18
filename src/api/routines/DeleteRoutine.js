import axios from "axios";
import { baseurl } from "../../utils/constatn";


const deleteRoutine = async (id) => {
  const token = localStorage.getItem("accessToken");
  
  return axios.delete(
    `${baseurl}/api/routines/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export default deleteRoutine;
