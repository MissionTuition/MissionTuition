import React from "react";
import react from "react";
import { Link } from "react-router-dom";
import Profile from "./Profile.tsx";
import { useState } from "react";

export default function ProfileContainer(props) {
  const {
    profile,
    setProfile,
    name,
    setName,
    profilePic,
    setProfilePic,
    summary,
    setSummary,
    donate,
    setDonate,
  } = props;
  return (
    <div className="profileContainer">
      <p>profile container</p>

      <Profile
        profile={profile}
        setProfile={setProfile}
        name={name}
        setName={setName}
        profilePic={profilePic}
        setProfilePic={setProfilePic}
        summary={summary}
        setSummary={setSummary}
        donate={donate}
        setDonate={setDonate}
      />
    </div>
  );
}
