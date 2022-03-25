import { createContext } from "react";

const AuthContext = createContext({
  token: null,
  setJwtToken: () => {},
  removeJwtToken: () => {},
  setRefreshToken: () => {},
  removeRefreshToken: () => {},
});

export default AuthContext;
