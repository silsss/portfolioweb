import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';


import "../styles/Home.css";
function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Silja</h2>
        <div className="prompt">
          <p>A self-taught front-end developer with a passion for learning</p>
          <a href='https://github.com/silsss/' target={"_blank"} rel="noreferrer"><GitHubIcon /></a>
          <a href='https://www.linkedin.com/in/silja-sorinardottir' target={'_blank'} rel="norefferer"><LinkedInIcon /></a>
          <a href="mailto:silja-s@hotmail.com?body=Hi Silja!"><EmailIcon /></a>
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