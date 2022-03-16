import "./App.css";
import LoginPage from "./pages/Login";
import MainGuestPage from "./pages/GuestMain";
import NavMenu from "./components/NavMenu";
import SpecialitiesPage from "./pages/Specialities";
import GlossaryPage from "./pages/Glossary";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/" element={<NavMenu />}>
          <Route path="main" element={<MainGuestPage />} />
          <Route path="specialities" element={<SpecialitiesPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
