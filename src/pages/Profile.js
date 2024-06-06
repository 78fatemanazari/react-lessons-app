import React from "react";
import { useParams } from "react-router-dom";

export const Profile = () => {
  const {name} = useParams();
  return (
    <div className="App">
      <h1>State Management Practice</h1>
      <h1>This is profile page of {name}</h1>
      <input></input>
      <button>Change Profile</button>
    </div>
  )
}