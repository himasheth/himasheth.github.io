import './App.css';
import './boot.css';
import React from 'react';
import hima from './images/hima.png';
import positweet from './images/positweet.png';
import website from './images/website.png';
import research from './images/research.JPG';
import shad from './images/shad.png';
import stemcomp from './images/stemcomp.png';
import dimagi from './images/dimagi.jpg';
import deca from './images/deca.png';
import blueprint from './images/blueprint.png';
import entsoc from './images/entsoc.png';
import { Project } from './components/Project.js';
import LearnButton from './components/Button';
import { Extracurricular } from './components/Extracurricular';

const projectList = [
  {
    'name': 'PosiTweet',
    'description': 'PosiTweet: A web app designed to show you positive vibes only!',
    'role': 'I helped design and implement the entire UI. The design was done in Figma after thorough research on the sentiment we were trying to evoke when people used our site.',
    'link': 'https://www.figma.com/file/xGBdLG2ZLWEjRIH7o78j5r/Hack-The-North!!?node-id=0%3A1',
    'image': positweet,
  },

  {
    'name': 'Personal Website',
    'description': "I'm currently working on designing my personal website! I'm incorporated my love for travel via a mapping API!",
    'role': 'I designed the pages on Figma and implemented the user interface using HTML/CSS/Javascript.',
    'link': 'https://himasheth.github.io/portfolio-website/',
    'image': website,
  },

  {
    'name': 'Research Student',
    'description': 'Created protocols and conducted experiments at an Applied Mathematics Lab at the University of Waterloo.',
    'role': 'I was responsible for optimally designing my projects and presenting them to the university before I began my projects.',
    'link': 'https://www.ctvnews.ca/sci-tech/students-pitch-next-wave-of-science-research-for-national-biogenius-competition-1.4392458',
    'image': research,
  },

  {
    'name': 'Shad Summer Program',
    'description': 'Design thinking challenge where SHAD students spend their summer researching, protoyping, creating, and testing a product based on the prompt given. The prompt for my year was to impactfully reduce waste.',
    'role': 'My team used spectroscopy and machine learning to create a scanner that tells you whether or not your waste is recyclable.',
    'link': 'https://docs.google.com/presentation/d/15dg5iaqr4HNzTBQKRRF1UxYeIyTEin1qV2OHlfWb1vA/edit?usp=sharing',
    'image': shad,
  },

  {
    'name': 'STEM Comp 2020',
    'description': 'A website for the largest STEM-based high school competition in the region. The website was used to submit projects by 100+ students in the WRDSB region.',
    'role': 'A peer and I designed and implemented the website using HTML/CSS/Javascript.',
    'link': 'https://stemcomp2020.com/',
    'image': stemcomp,
  },

  {
    'name': 'DECA Business Plan Design',
    'description': 'Conducted a new marketing plan to attract more customers for a retail brand',
    'role': 'During DECA, a high school business case competition, a peer and I designed a user-centered marketing plan. We conducted user research and proposed changes to the current marketing plan as well addition of new plans to attract a new user type.',
    'link': 'https://docs.google.com/document/d/1IX5qaqPEnACtZgtsnKrc6NviJLRFTj-uGYUvv04Y1wg/edit?usp=sharing',
    'image': deca,
  },
]

const extracurricularList = [
  {
    'name': 'Dimagi | Technology for Social Impact',
    'description': 'Dimagi works with countries all around the world to provide tech for social impact. Their tech development platform CommCare is used globally by a diverse group of people in order to create emerging technology guaranteed to change the way we run our health care systems.',
    'role': "I'm working on a team of four to create a new CommCare app that will help developing countries combat the spread of tuberculosis. My specific role includes researching the user personas, designing the prototype of the app, and researching current design flaws to ensure our design is easily accessible by anyone regardless of their age, gender, and technical literacy.",
    'link': 'https://www.dimagi.com/',
    'image': dimagi,
  },
  {
    'name': 'UW Blueprint',
    'description': 'UW Blueprint is a group of students at the University of Waterloo dedicated to building and promoting technology for social good. UW Blueprint partners with non-profits to provide technology services such as websites, mobile applications, analysis tools—free of charge.',
    'role': "I'm a project developer on UW Blueprint's Small Projects team but I strive to involve myself in numerous other ways. I work with the designers to help with the iterative design process, giving feedback and testing workflows before I implement them using React, Typescript, and Sass. I'm also on the Meta-BP team that works to ensure UW Blueprint's future. Finally, I'm on the scoping committee and work to find new organizations that we can partner with.",
    'link': 'https://uwblueprint.org/',
    'image': blueprint,
  },
  {
    'name': 'UW Entrepreneurship Society',
    'description': "EntSoc aims to build inclusive innovation by exposing students of all faculties to Waterloo's entrepreneurial ecosystem. We recently launched a project called 'Janus' that connects student entreprenuers at UW with other students who want to join them on their venture.",
    'role': 'I work as a fullstack developer at UW Entrepreneurship Society. I use technologies like React, Typescript, Heroku, MongoDB, Sass, and Material-UI in order to implement new designs.',
    'link': 'https://entsoc.ca/janus',
    'image': entsoc,
  }
]

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <div className='top-banner'>
          <a className='top-banner' href='https://www.figma.com/file/FjDM56usBMe18h2P81Ieau/portfoliooooooo?node-id=0%3A1'>This website is a work in progress. Click here to see the current design progress!</a>
        </div>
        <div className='top'>
          <table>
            <div className='title'>
              Hima Sheth’s Design Portfolio
            </div>
            <div className='subtitle'>
              I’m a dev and aspiring designer
            </div>
            <div className='intro'>
              I’m passionate about <b>tech for social good </b>and hope to
              develop and design impactful, and easy-to-use solutions
              to the world’s problems!
            </div>
            <br></br>
            <div className='button-div'>
              <LearnButton></LearnButton>
            </div>
          </table>
          <div id='circle'>
            <img className='hima' src={hima} alt='hima'></img>
          </div>
        </div>
        <div id='projects'>
          <div className='projects'>
            <h2 className='section-heading'>projects.</h2>
            <div className='project-list row'>
              {projectList.map((project) =>
                <Project key="0" link={project.link} name={project.name} image={project.image} description={project.description} role={project.role} picture={project.image}></Project>)}
            </div>
          </div>
        </div>
        <div className='extra-curriculars' id='extra-curriculars'>
          <h2 className='section-heading'>extra-curriculars.</h2>
          <div className='project-list row'>
            {extracurricularList.map((ec) =>
              <Extracurricular key="0" link={ec.link} name={ec.name} image={ec.image} description={ec.description} role={ec.role} picture={ec.image}></Extracurricular>)}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
