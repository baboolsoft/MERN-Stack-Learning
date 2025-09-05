import { Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import Todo from "./Todo.jsx";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo" element={<Todo />} />
    </Routes>
  );
}
