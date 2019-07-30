import React from "react";
import "./profile.css";

const profile = props => (
  <div className="profile">
    <h1>Your Profile Details</h1>
    <ul>
      <li>Username: {props.name}</li> <br />
      <li>E-Mail: {props.mail}</li>
      <br />
      <li>ID No: {props.id}</li>
      <br />
      <li>Profession: {props.prof}</li>
    </ul>
  </div>
);

export default profile;
