import { Link } from "react-router-dom";
import "./VictoryPage.css";

export default function VictoryPage() {
  return (
    <section className="victory">
      <div className="victory-card">
        <h2>You Escaped!</h2>
          <p>You successfully disabled Project NEXUS and escaped the facility.</p>
        <Link className="button" to="/">Return to Home</Link>
      </div>
    </section>
  );
}