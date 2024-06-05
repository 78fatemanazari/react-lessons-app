import React from "react";
import {Link} from 'react-router-dom';

export const Nav = () => {
  return(
    <div className="App">
      <Link to={'/profile'}>Profile</Link> |
      <Link to={'/course'}>Courses</Link> |
      <Link to={'/excuse'}>Random Excuse</Link>
    </div>
  )
}