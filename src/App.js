const axios = require("axios");
// eslint-disable-next-line import/first
import { useState } from "react";
// eslint-disable-next-line import/first
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState("");
  const [position, setPosition] = useState("");
  const [wage, setWage] = useState(0);

  const addEmployee = () => {
    console.log(name);
    axios
      .post("http://localhost:5000/create", {
        name,
        age,
        country,
        position,
        wage,
      })
      .then(() => {
        console.log("success");
      });
  };

  return (
    <div className="App">
      <div className="information">
        <label htmlFor="">Name:</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label htmlFor="">Age:</label>
        <input type="number" onChange={(e) => setAge(e.target.value)} />
        <label htmlFor="">Country</label>
        <input type="text" onChange={(e) => setCountry(e.target.value)} />
        <label htmlFor="">Position:</label>
        <input type="text" onChange={(e) => setPosition(e.target.value)} />
        <label htmlFor="">Wage (year):</label>
        <input type="number" onChange={(e) => setWage(e.target.value)} />
        <button onClick={addEmployee}>Add Employee</button>
      </div>
    </div>
  );
}

export default App;
