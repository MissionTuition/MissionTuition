import React from "react";
import "../styles/App.css";
import { Link } from "react-router-dom";
import ProfileContainer from "./ProfileContainer.tsx";

function App() {
  const [profile, setProfile] = React.useState("");
  const [name, setName] = React.useState<string>("");
  const [profilePic, setProfilePic] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [donate, setDonate] = React.useState<string>("");

  return (
    <div className="App">
      <header className="App-header">app</header>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
  
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
  );
}

export default App;
