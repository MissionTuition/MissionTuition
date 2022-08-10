import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import ProfileContainer from "./ProfileContainer.tsx";
import Profile from "./Profile.tsx";
function Home() {

const testArr1=[];
  function createProfs(el){
    testArr1.push(el)
console.log('hi', el)
  }
  let listTest;
  
  fetch("/api/home", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      //console.log(27,data)//
        data.forEach((el) => {
       createProfs(el)
     testArr1.push(el)
    });
    listTest = data;
    // for (let i = 0; i< data.length; i++){
    //   testArr1.push(<li key={data[i]}> {data[i]} </li > )
    //   return (
    //     testArr1.push(data[i])
    //   )
    // }
    console.log('testAr1', testArr1)
  })
  .catch((err) => console.log(err));
  //     const testArr = ['profile-1', 'profile-2', 'profile-3']; 
  // console.log(33,testArr1[0].summary)
//  const renderedArr = testArr.map(() => );



  // const listItems = listTest.map((d) => <li key={d.listTest}> {d.listTest}</li>)
testArr1.forEach((el) => {
  return(
    <div>
<ProfileContainer/>
  <div className="profileInput">
<div className="profile-image">
  <iframe
    src={el.profilePic}
    height="300"
    width="400"
    title="profile picture"
  ></iframe>
</div>
<br />
<h3>Name: {el.name} </h3>
<br />
<h5>
  <strong>Summary: </strong>
  {el.summary}
</h5>
<br />
<p>
  <strong>Donate: </strong>
  {el.donation}
</p>
<iframe
    src={el.qr_code}
    height="200"
    width="200"
    title="code"
  ></iframe>
</div>
</div>
)
})
}
  // return (
  //   <div className="home">
  
  //     <button id='prof'>
  //     <Link to="/profile">Profile</Link>
  //     </button>
  //     <button id='signout'>
  //     <Link to="/">Sign Out</Link>
  //     </button>
  //     <div id='profCard'>
  //       {/* <div>{testArr1[0].summary}</div> */}
  //       {/* {testArr.map(el => (
  //         <div key={testArr.id}>
  //           {data}
  //           </div>
  //       )
  //       )} */}
       
  //      {listItems}
     
  //     </div>
  //   </div>
  // );
  //     }
      


export default Home;


