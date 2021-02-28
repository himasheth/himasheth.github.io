import "./App.css";
import "./boot.css";
import hima from "./images/hima.png";
import positweet from "./images/positweet.png";
import website from "./images/website.png";
import research from "./images/research.JPG";
import shad from "./images/shad.png";
import stemcomp from "./images/stemcomp.png";
import deca from "./images/deca.png";
import { Project } from "./components/Project.js";
import LearnButton from './components/Button';
import { Extracurricular } from "./components/Extracurricular";

const positweetlink = "https://www.figma.com/file/xGBdLG2ZLWEjRIH7o78j5r/Hack-The-North!!?node-id=0%3A1";
const portfoliolink = "https://himasheth.github.io/portfolio-website/";
const researchlink = "https://www.ctvnews.ca/sci-tech/students-pitch-next-wave-of-science-research-for-national-biogenius-competition-1.4392458"
const shadlink = "https://docs.google.com/presentation/d/15dg5iaqr4HNzTBQKRRF1UxYeIyTEin1qV2OHlfWb1vA/edit?usp=sharing"
const stemcomplink = "https://stemcomp2020.com/";
const decalink = "https://docs.google.com/document/d/1IX5qaqPEnACtZgtsnKrc6NviJLRFTj-uGYUvv04Y1wg/edit?usp=sharing";

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
              develop and design impactful, and easy-to-use solutions
              to the world’s problems!
            </div>
            <br></br>
            <div className="button-div">
              <LearnButton></LearnButton>
            </div>
          </table>
          <div id="circle">
            <img src={hima} alt="hima"></img>
          </div>
        </div>
        <div className="projects" id="projects">
          <h2 className="section-heading">projects.</h2>
          <div className="project-list row">
            <Project link={positweetlink} name="PosiTweet" image={positweet} description="PosiTweet: A web app designed to show you positive vibes only!" role="I helped design and implement the entire UI. The design was done in Figma after thorough research on the sentiment we were trying to evoke when people used our site."> </Project>
            <Project link = {portfoliolink} name="Portfolio Website" image={website} description="I'm currently working on designing my personal website! I'm incorporated my love for travel via a mapping API!" role="I designed the pages on Figma and implemented the user interface using HTML/CSS/Javascript."> </Project>
            <Project link = {researchlink} name="Research Student" image={research} description="Created protocols and conducted experiments at an Applied Mathematics Lab at the University of Waterloo." role="I was responsible for optimally designing my projects and presenting them to the university before I began my projects."> </Project>
          </div>
          <div className="row project-list">
            <Project link = {shadlink} className="col" name="Shad Summer Program" image={shad} description="Design thinking challenge where SHAD students spend their summer researching, protoyping, creating, and testing a product based on the prompt given. The prompt for my year was to impactfully reduce waste." role="My team used spectroscopy and machine learning to create a scanner that tells you whether or not your waste is recyclable."> </Project>
            <Project link = {stemcomplink} className="col" name="STEMComp 2020" image={stemcomp} description="A website for the largest STEM-based high school competition in the region. The website was used to submit projects by 100+ students in the WRDSB region." role="A peer and I designed and implemented the website using HTML/CSS/Javascript"> </Project>
            <Project link = {decalink} className="col" name="DECA Business Plan Design" image={deca} description="Conducted a new marketing plan to attract more customers for a retail brand" role="During DECA, a high school business case competition, a peer and I designed a user-centered marketing plan. We conducted user research and proposed changes to the current marketing plan as well addition of new plans to attract a new user type."> </Project>
          </div>
        </div>
        <div className="extra-curriculars" id="extra-curriculars">
          <h2 className="section-heading">extra-curriculars.</h2>
          <div className="project-list row">
            <Extracurricular link={positweetlink} name="PosiTweet" image={positweet} description="PosiTweet: A web app designed to show you positive vibes only!" role="I helped design and implement the entire UI. The design was done in Figma after thorough research on the sentiment we were trying to evoke when people used our site."> </Extracurricular>
            <Project link = {portfoliolink} name="Portfolio Website" image={website} description="I'm currently working on designing my personal website! I'm incorporated my love for travel via a mapping API!" role="I designed the pages on Figma and implemented the user interface using HTML/CSS/Javascript."> </Project>
            <Project link = {researchlink} name="Research Student" image={research} description="Created protocols and conducted experiments at an Applied Mathematics Lab at the University of Waterloo." role="I was responsible for optimally designing my projects and presenting them to the university before I began my projects."> </Project>
          </div>
          <div className="row project-list">
            <Project link = {shadlink} className="col" name="Shad Summer Program" image={shad} description="Design thinking challenge where SHAD students spend their summer researching, protoyping, creating, and testing a product based on the prompt given. The prompt for my year was to impactfully reduce waste." role="My team used spectroscopy and machine learning to create a scanner that tells you whether or not your waste is recyclable."> </Project>
            <Project link = {stemcomplink} className="col" name="STEMComp 2020" image={stemcomp} description="A website for the largest STEM-based high school competition in the region. The website was used to submit projects by 100+ students in the WRDSB region." role="A peer and I designed and implemented the website using HTML/CSS/Javascript"> </Project>
            <Project link = {decalink} className="col" name="DECA Business Plan Design" image={deca} description="Conducted a new marketing plan to attract more customers for a retail brand" role="During DECA, a high school business case competition, a peer and I designed a user-centered marketing plan. We conducted user research and proposed changes to the current marketing plan as well addition of new plans to attract a new user type."> </Project>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
