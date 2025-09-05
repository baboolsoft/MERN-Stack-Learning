import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Welcome Student</h1>
      
      <div style={{ marginTop: 10 }}>
        <input
          placeholder="Type your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <p>{name ? `Hello, ${name}!` : "Start typing above…"}</p>
      </div>
    </div>
  );
}
