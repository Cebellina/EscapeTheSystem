import { Link } from "react-router-dom";
import rooms from "../data/rooms.json";
import "./Navbar.css";
import { useInventory } from "../context/InventoryContext";

const Navbar = () => {
  const { hasItem } = useInventory();

  return (
    <nav className="navbar">
      {rooms
        .filter(
          (room) =>
            room.roomPath !== "exit-node" ||
            hasItem(6)
        )
        .map((room) => (
          <Link key={room.id} to={`/room/${room.roomPath}`}>
            {room.roomName}
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;