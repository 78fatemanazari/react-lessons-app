import {useContext} from "react";
//import { useParams } from "react-router-dom";
import { ChangeProfile } from "../components/ChangeProfile";
import { ProfileContext } from "../App";

export const Profile = () => {
  //const {name} = useParams();
  const {username, setUsername} = useContext(ProfileContext);
  return (
    <div className="App">
      <h1>State Management Practice</h1>
      <h1>This is profile page of {username}</h1>
      <ChangeProfile setUsername={setUsername} />
    </div>
  )
}