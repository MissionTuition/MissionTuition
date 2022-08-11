import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import ProfileContainer from "./ProfileContainer.tsx";
import Profile from "./Profile.tsx";
let ourData;

function Home() {

  const [feed, setFeed] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/home", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setFeed(data);
        console.log('helloooo', data)
      })
      .catch((err) => console.log(err));
  }, []);

  console.log('help', ourData)
  console.log('feed: ', feed);

const shownFeed = [];
for(let i =0; i < feed.length; i++){
  const a = feed[i];
  shownFeed.push(a);
}

  const renderFeed: any = [];
  for(let i = 0; i < shownFeed.length; i++) {
    const a = shownFeed[i];
    renderFeed.push(
      <div>
      <div className="profileInput">
      <div className="profile-image">
      <iframe
          src={a.profilepic}
          height="350px"
          width="500px"
          title="code"
        ></iframe>
      </div>
      <br />
      <h3>Name: {a.name} </h3>
      <br />
     <h5>
           <strong>Summary: </strong>
            {a.summary}
       </h5>
     <p>
      <strong>Donate: </strong>
     {a.donation}
     </p>
        <iframe
          src={a.qr_code}
          height="200"
          width="200"
          title="code"
        ></iframe>
        </div>
      <div className="feed" key={i}>
        <div id="profiles">
  
        </div>
      </div>
      </div>
    );
  }

  console.log('Render feed: ', renderFeed);
  return (
    <div className = 'home-wrapper'>

  
  <div className = "homebtn">
      <button id='prof'>
      <Link to="/profile">Profile</Link>
    </button>
    <button id='signout'>
      <Link to="/">Sign Out</Link>
    </button>
  </div>

    <div id="home">
      <div id='profCard'>
  
      {renderFeed}

       </div>
      </div>
</div>
  );
  
}

export default Home;
