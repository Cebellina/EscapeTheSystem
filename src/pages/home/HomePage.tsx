import { Link } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Escape The System</h1>
        <p>
          You wake up under flickering fluorescent lights. The hum of failing
          machines echoes through cold metal corridors. You are trapped inside
          Project NEXUS — an abandoned AI research facility that has been sealed
          for years.
        </p>
        <p>
          Someone — or something — locked the doors from the inside. To escape,
          you must move through the facility's chambers, solve its puzzles, and
          collect the tools left behind by those who never made it out.
        </p>
        <p>
          The exit is out there. But the system won't let you leave without a
          fight.
        </p>
        <p>
          <strong>Good luck. You'll need it.</strong>
        </p>
        <Link className="button" to="/room/server-room">Start Escape</Link>
      </div>
    </section>
  );
};

export default HomePage;