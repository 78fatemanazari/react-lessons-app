import React from "react";
import { useState } from "react";
import Axios from "axios";

export const Excuse = () => {
  const [fetchExcuse, setFetchExcuse] = useState("");
  const fetchAllExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      console.log(res.data);
      setFetchExcuse(res.data[0].excuse)
    });
  };

  return (
    <div className="App">
      <button onClick={()=>fetchAllExcuse("party")}>Party</button>
      <button onClick={()=>fetchAllExcuse("family")}>Family</button>
      <button onClick={()=>fetchAllExcuse("office")}>Office</button>
      <h1>{fetchExcuse}</h1>
    </div>
  );
};


