import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { AuthActionsContext } from "../contexts/AuthContext";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAuthActions = () => useContext(AuthActionsContext);
