import { Link } from "react-router-dom";
import "./VictoryPage.css";

export default function VictoryPage() {
  return (
    <section>
      <h2>You Escaped!</h2>
      <p>
        You successfully disabled Project NEXUS and escaped the facility.
      </p>

      <Link to="/">Return to Home</Link>
    </section>
  );
}