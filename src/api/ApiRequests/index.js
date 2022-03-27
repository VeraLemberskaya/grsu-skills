import API from "../../api";
import { allFacultiesEndPoint } from "../../constants";

export const getFaculties = async () => {
  return await API.get(allFacultiesEndPoint)
    .then((response) => response.data)
    .catch((error) => console.log(error));
};
