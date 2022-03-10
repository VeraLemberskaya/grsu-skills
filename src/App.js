import "./App.css";
import LoginPage from "./pages/Login";
import MainGuestPage from "./pages/GuestMain";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/main" element={<MainGuestPage />} />
      </Routes>
    </div>
  );
}

export default App;
