import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://pipex.onrender.com/")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <div>
      <h1>Oogway03</h1>
      <p>{data ? data : "Loading..."}</p>
    </div>
  );
}

export default App;
