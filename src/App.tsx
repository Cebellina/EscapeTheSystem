import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import RoomPage from "./pages/room/RoomPage";
import VictoryPage from "./pages/victory/VictoryPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomPath" element={<RoomPage />} />
        <Route path="/victory" element={<VictoryPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;