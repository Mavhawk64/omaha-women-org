import { Link } from "react-router-dom";
import "../Styles/header.css"

export default function Header() {
  return (
    <div className="header-container">
      <div>International Women's Club</div>
      <div>
        <nav
            style={{
            borderBottom: "solid 1px",
            paddingBottom: "1rem",
            }}
        >
            <Link to="/events">events</Link> {" "}
            <Link to="/register">register</Link>{" "}
            <Link to="/login">Signin</Link> {" "}
        </nav>
      </div>
    </div>
  );
}