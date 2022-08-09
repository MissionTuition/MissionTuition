import React from "react";
import "../styles/Profile.css";
import { Link } from "react-router-dom";

function Profile(props) {
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProfile = {
      profilePic: profilePic,
      name: name,
      summary: summary,
      donate: donate,
    };
    setProfile(updateProfile);
  };

  return (
    <div className="profile">
      <header className="profile-header">
        Profile
        <Link to="/home">feed</Link>
        <Link to="/">Sign Out</Link>
      </header>

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
          placeholder="Enter picture"
          className="input"
        />
        <label htmlFor="summary">Summary</label>
        <input
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          type="text"
          placeholder="Enter summary"
          className="input"
        />
        <label htmlFor="donate">Donate</label>
        <input
          value={donate}
          onChange={(e) => setDonate(e.target.value)}
          type="text"
          placeholder="Enter Donation Information"
          className="input"
        />

        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
