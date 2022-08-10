import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import ProfileContainer from "./ProfileContainer.tsx";

function Profile() {
  const [profile, setProfile] = React.useState("");
  const [name, setName] = React.useState<string>("");
  const [profilePic, setProfilePic] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [donate, setDonate] = React.useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProfile = {
      profilePic: profilePic,
      name: name,
      summary: summary,
      donate: donate,
    };
    setProfile(updateProfile);

    fetch("http://localhost:3000/home", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        // x-www-form-urlencoded
      },

      body: JSON.stringify(profile),
    }).then((response) => response.json());
    // .then(useNavigate("/success"))
  };
  console.log(profile);
  return (
    <div className="profile">
            <div className="links"><header className="profile-header">
              <button className="btn1">
        <Link to="/home">Feed</Link>
        </button>

        <button className="btn2">
        <Link to="/">Sign Out</Link>
        </button>
      </header></div>
      <div className="inputBox">
        <div className="inputFields">
          <div className="responseArea">
           

            <form onSubmit={handleSubmit}>
              <label htmlFor="name">Full Name </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
                className="input"
              />
              <label htmlFor="picture">Picture</label>
              <input
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                type="text"
                placeholder="Enter picture URL"
                className="input"
              />
              <label htmlFor="summary">Summary</label>
              <input
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
                type="text"
                placeholder="Enter summary"
                className="sum"
              />
              <label htmlFor="donate">Donate</label>
              <input
                value={donate}
                onChange={(e) => setDonate(e.target.value)}
                type="text"
                placeholder="Enter Donation Information"
                className="input"
              />

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="profPrev">
          <div className="prevText">
            <p id="prevText">Your Profile Preview:</p>
            <ProfileContainer
              profile={profile}
              profilePic={profilePic}
              summary={summary}
              name={name}
              donate={donate}
            />
          </div>
       
        </div>
      </div>
    </div>
  );
}

export default Profile;
