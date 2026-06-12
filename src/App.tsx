import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/home/HomePage";
import RoomPage from "./pages/room/RoomPage";
import VictoryPage from "./pages/victory/VictoryPage";
import { InventoryProvider } from "./context/InventoryContext";

const App = () => {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/room/:roomPath" element={<RoomPage />} />
          <Route path="/victory" element={<VictoryPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </InventoryProvider>
    </BrowserRouter>
  );
};

export default App;