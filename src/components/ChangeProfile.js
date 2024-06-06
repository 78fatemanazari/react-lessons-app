import React, { useState, useContext } from "react";
import { ProfileContext } from "../App";

export const ChangeProfile = () => {
  const [newusername, setNewusername] = useState();
  const {setUsername} = useContext(ProfileContext);
  return (
    <div>
      <input onChange={(event) => {setNewusername(event.target.value)}}></input>
      <button onClick={() => {setUsername(newusername)}}>Change Profile</button>
    </div>
  )
}