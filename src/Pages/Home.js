import React from "react";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Silja</h2>
        <div className="prompt">
          <p>A self-taught front-end developer with a passion for learning</p>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, NPM, MaterialUI, Figma
            </span>
          </li>
          <li className="item">
        
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;