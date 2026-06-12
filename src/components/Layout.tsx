import { Outlet } from "react-router-dom";
import Inventory from "./Inventory";
import Navbar from "./Navbar";
import "./Layout.css";
import "./Inventory.css";
import "./navbar/Navbar.css";

export default function Layout() {
  return (
    <>
      <header>
        <h1>Escape the System</h1>
        <Navbar />
      </header>

      <main>
        <Outlet />
      </main>

      <Inventory />
    </>
  );
}