import React from "react";
import {Link} from "react-router-dom";

const HomePage = () => {
  
  return (
    <div>
      <h2>Welcome to Office</h2>
      <p>You are logged in!</p>

        <p style={{ marginTop: "20px" }}>
        <Link to="/login">Logout</Link>
      </p>
    </div>
  );
};

export default HomePage;