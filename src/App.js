import "./App.css";
import "./boot.css";
import hima from "./hima.png";
import positweet from "./positweet.png";
import website from "./website.png";
import research from "./research.JPG";
import shad from "./shad.png";
import stemcomp from "./stemcomp.png";
import deca from "./deca.png";
import {Project}from "./Project.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="top">
          <table>
            <div className="title">
              Hima Sheth’s Design Portfolio
            </div>
            <div className="subtitle">
              ✨ I’m a dev and aspiring designer ✨
            </div>
            <div className="intro">
              I’m passionate about <b>tech for social good </b>and hope to
              develop and design impactful, and easy-to-use <br></br>solutions
              to the world’s problems!
            </div>
            <br></br>
            <div className="button-div">
            <button className="more"> Learn more below! </button>
            </div>
          </table>
          <div id="circle">
            <img src={hima} alt="hima"></img>
          </div>
        </div>
        <div className="projects">
            <div className="project-list row">
            <Project name="PosiTweet" image={positweet} description="PosiTweet: A web app designed to show you positive vibes only!" role="I helped design and implement the entire UI. The design was done in Figma after thorough research on the sentiment we were trying to evoke when people used our site."> </Project>
            <Project name="Portfolio Website" image={website} description="I'm currently working on designing my personal website! I'm incorporated my love for travel via a mapping API!" role="I designed the pages on Figma and implemented the user interface using HTML/CSS/Javascript."> </Project>
            <Project name="Research Student" image={research} description="Created protocols and conducted experiments at an Applied Mathematics Lab at the University of Waterloo." role="I was responsible for optimally designing my projects and presenting them to the university before I began my projects."> </Project>
            </div>
            <div className="row project-list">
            <Project className="col" name="Shad Summer Program" image={shad} description="Design thinking challenge where SHAD students spend their summer creating a product based on the prompt given. The prompt for my year was to impactfully reduce waste." role="My team used spectroscopy and machine learning to create a scanner that tells you whether or not your waste is recyclable."> </Project>
            <Project className="col" name="STEMComp 2020" image={stemcomp} description="A website for the largest STEM-based high school competition in the region. The website was used to submit projects by 100+ students in the WRDSB region." role="A peer and I designed and implemented the website using HTML/CSS/Javascript"> </Project>
            <Project className="col" name="DECA Business Plan Design" image={deca} description="Conducted a new marketing plan to attract more customers for a retail brand" role="During DECA, a high school business case competition, a peer and I designed a user-centered marketing plan. We conducted user research and proposed changes to the current marketing plan as well addition of new plans to attract a new user type."> </Project>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
