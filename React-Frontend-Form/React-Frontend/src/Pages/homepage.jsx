import { useEffect, useState } from "react";
import API from "../api/api.js";

const HomePage = () => {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await API.get("/register"); // backend GET route
        console.log("Employees fetched:", res.data);

        if (res.data.success && res.data.Data) {
          setEmployees(res.data.Data); // backend sends employees in "Date"
        } else {
          setEmployees([]);
        }
      } catch (err) {
        console.error("Error fetching employees:", err);
        setEmployees([]);
      } finally {
        setLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <div>
      <h2>Employees</h2>
      {loading ? (
        <p>Loading...</p>
      ) : employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        <ul>
          {employees.map((emp) => (
            <li key={emp._id}>
              <strong>{emp.username}</strong> — {emp.email}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HomePage;
