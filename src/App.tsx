import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InventoryProvider } from "./context/InventoryContext";
import Layout from "./components/Layout";
import Home from "./pages/home/HomePage";
import Room from "./pages/room/RoomPage";
import Victory from "./pages/victory/VictoryPage";
import NotFound from "./components/navbar/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <InventoryProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="room/:roomPath" element={<Room />} />
            <Route path="victory" element={<Victory />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </InventoryProvider>
    </BrowserRouter>
  );
}