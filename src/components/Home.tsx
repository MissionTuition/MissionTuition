import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import ProfileContainer from "./ProfileContainer.tsx";
import Profile from "./Profile.tsx";
function Home() {
  const [profile, setProfile] = React.useState("");
  const [name, setName] = React.useState<string>("");
  const [profilePic, setProfilePic] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [donate, setDonate] = React.useState<string>("");
  return (
    <div className="home">
  
      <button id='prof'>
      <Link to="/profile">Profile</Link>
      </button>
      <button id='signout'>
      <Link to="/login">Sign Out</Link>
      </button>
      <div id='profCard'>
      <ProfileContainer 
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
    </div>
  );
}

export default Home;
