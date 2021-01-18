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
              Hima Sheth’s Design <br></br>Portfolio
            </div>
            <div className="subtitle">
              ✨ I’m a dev and aspiring designer ✨
            </div>
            <div className="intro">
              I’m passionate about <b>tech for social good </b>and hope to{" "}
              <br></br>
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
            <Project name="PosiTweet" image={positweet} description="PosiTweet: A web app designed to show you positive vibes only!"> </Project>
            <Project name="Portfolio Website" image={website} description="I'm currently working on designing my personal website! I'm incorporated my love for travel via a mapping API!"> </Project>
            <Project name="Research Student" image={research} description="Designed, analyzed, and validated hypotheses based on historical data."> </Project>
            </div>
            <div className="row project-list">
            <Project className="col" name="Shad Summer Program" image={shad} description="PosiTweet: A web app designed to show you positive vibes only!"> </Project>
            <Project className="col" name="STEMComp 2020" image={stemcomp} description="I'm currently working on designing my personal website! I'm incorporated my love for travel via a mapping API!"> </Project>
            <Project className="col" name="DECA Business Plan Design" image={deca} description="Designed, analyzed, and validated hypotheses based on historical data."> </Project>
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;
