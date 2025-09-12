import { useState } from "react";
import Header from "./components/Header.jsx";
import ControlPanel from "./components/ControlPanel.jsx";
import Card from "./components/Card.jsx";

const data = [
  { id: 1, title: "Task 1", description: "Complete the report", status: "active" },
  { id: 2, title: "Task 2", description: "Check emails", status: "completed" },
  { id: 3, title: "Task 3", description: "Design review", status: "active" },
  { id: 4, title: "Task 4", description: "Update roadmap", status: "completed" },
];

export default function App() {
  const [filter, setFilter] = useState("all");

  const filteredData = data.filter(
    (item) => filter === "all" || item.status === filter
  );

  return (
    <div className="min-h-screen">
      <Header />
      <main className="p-6">
        <ControlPanel onFilterChange={setFilter} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item) => (
            <Card key={item.id} title={item.title} description={item.description} />
          ))}
        </div>
      </main>
    </div>
  );
}
