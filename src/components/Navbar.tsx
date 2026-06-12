import { Link } from "react-router-dom";
import rooms from "../data/rooms.json";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      {rooms
        .filter((room) => room.roomPath !== "exit-node")
        .map((room) => (
          <Link key={room.id} to={`/room/${room.roomPath}`}>
            {room.roomName}
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;