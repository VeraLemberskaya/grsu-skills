import axios from "axios";
import { grsuSkillsURL } from "../constants";

const axiosInstance = axios.create({
  baseURL: grsuSkillsURL,
  responseType: "json",
});

export default axiosInstance;
