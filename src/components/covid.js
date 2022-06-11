import React, { useEffect, useState } from "react";
import "./covid.css";
function Covid() {
  const [state, setState] = useState("uttar pradesh");
  const [values, setValues] = useState([]);
  const getData = async () => {
    try {
      console.log("hello");
      const response = await fetch("https://data.covid19india.org/data.json");
      const data = await response.json();
      for (var i = 0; i < 38; i++) {
        // console.log(data.statewise[i].state.toLowerCase());
        if (data.statewise[i].state.toLowerCase() == state.toLowerCase()) {
          setValues(data.statewise[i]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="covid">
      <h1 className="heading">Covid Update</h1>
      <div className="search">
        <input
          type="text"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <button onClick={getData}>Submit</button>
      </div>
      <div className="allInfo">
        <div className="statename card">
          <h1>State</h1>
          <p>{values.state}</p>
        </div>
        <div className="active card">
          <h1>Total Active</h1>
          <p>{values.active}</p>
        </div>
        <div className="deaths card">
          <h1>Total Deaths</h1>
          <p>{values.deaths}</p>
        </div>
        <div className="confirmed card">
          <h1>Total Confirmed</h1>
          <p>{values.confirmed}</p>
        </div>
        <div className="recovered card">
          <h1>Total Recovered</h1>
          <p>{values.recovered}</p>
        </div>
      </div>
    </div>
  );
}

export default Covid;
