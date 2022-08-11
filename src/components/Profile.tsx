import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";
import ProfileContainer from "./ProfileContainer.tsx";

function Profile() {
  const [profile, setProfile] = React.useState({});
  const [name, setName] = React.useState<string>("");
  const [profilePic, setProfilePic] = React.useState<string>("");
  const [summary, setSummary] = React.useState<string>("");
  const [donation, setDonation] = React.useState<string>("");
  const [qr_code, setQr_code] = React.useState<string>("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProfile = {
      profilePic: profilePic,
      name: name,
      summary: summary,
      donation: donation,
      qr_code: qr_code
    };
    setProfile(updateProfile);

    fetch("/api/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // x-www-form-urlencoded
      },

      body: JSON.stringify(profile),
    })
    // .then(useNavigate("/success"))
  };

  
  console.log(profile);
  return (
    <div className="profile">
            <div className="top_link"><header className="profile-header">
              <button className="btn1">
        <Link to="/home">Feed</Link>
        </button>

        <button className="btn2">
        <Link to="/">Sign Out</Link>
        </button>
      </header></div>
      <div className="inputBox">
        <div className="left">
          <div className="contact">
           

            <form onSubmit={handleSubmit}>
              <label htmlFor="picture">Picture</label>
              <input
                value={profilePic}
                onChange={(e) => setProfilePic(e.target.value)}
                type="text"
                placeholder="Enter picture URL"
                className="input"
              />
              <label htmlFor="name">Full Name </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Enter name"
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
                value={donation}
                onChange={(e) => setDonation(e.target.value)}
                type="text"
                placeholder="Enter Donation Amount Needed"
                className="input"
              />
              <label htmlFor="qrCode">QR Code</label>
              <input
                value={qr_code}
                onChange={(e) => setQr_code(e.target.value)}
                type="text"
                placeholder="Enter QR Code"
                className="input"
              />

              <button type="submit" className="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="right">
          <div className="right-text">
            <p id="prevText">Your Profile Preview:</p>
            <ProfileContainer
              profile={profile}
              profilePic={profilePic}
              summary={summary}
              name={name}
              donation={donation}
              qr_code={qr_code}
            />
          </div>
          <div className="right-inductor"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
