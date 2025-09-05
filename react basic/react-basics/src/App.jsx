import { Link } from "react-router-dom";
import Router from "./Router.jsx";

export default function App() {
  return (
    <div className="app">
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/todo">Todo</Link>
      </nav>
      <Router />
    </div>
  );
}
