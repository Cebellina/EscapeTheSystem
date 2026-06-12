import { Link } from "react-router-dom";
import "./VictoryPage.css";

export default function Victory() {
  return (
    <section>
      <h2>Du rymde!</h2>
      <p>
        Du lyckades stänga av Project NEXUS och ta dig ut ur anläggningen.
      </p>

      <Link to="/">Till startsidan</Link>
    </section>
  );
}