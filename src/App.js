import "./App.css";
import LoginPage from "./pages/Login";
import MainGuestPage from "./pages/GuestMain";
import NavMenu from "./components/NavMenu";
import Specialities from "./pages/Specialities";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<NavMenu />}>
          <Route path="main" element={<MainGuestPage />} />
          <Route path="/specialities" element={<Specialities />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
