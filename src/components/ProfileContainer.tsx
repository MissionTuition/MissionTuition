import React from "react";
import react from "react";
import { Link, Outlet } from "react-router-dom";
import Profile from "./Profile.tsx";
import { useState } from "react";
import "../styles/Profile.css";

export default function ProfileContainer(props) {
  const { profile, profilePic, name, summary, donate } = props;

  console.log(2, profile);
  return (
    <div className="profileInput">
      <div className="profile-image">
        <iframe
          src={profile.profilePic}
          height="300"
          width="400"
          title="Iframe Example"
        ></iframe>
      </div>
      <br />
      <h3>Name: {profile.name} </h3>
      <br />
      <h5>
        <strong>Summary: </strong>
        {profile.summary}
      </h5>
      <br />
      <p>
        <strong>Donate: </strong>
        {profile.donate}
      </p>
    </div>
  );
}
