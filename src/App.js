import "./App.css";
import Routes from "./AppRoutes";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getUserInfo } from "./services/authService";
import { setUser } from "./redux/authSlice";
import { useDispatch } from "react-redux";

function App() {
  const { jwtToken, refreshToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    if (jwtToken && refreshToken) {
      const user = getUserInfo(jwtToken);
      dispatch(setUser(user));
    }
  }, []);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
