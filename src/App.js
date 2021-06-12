import './styles/App.css';
import './styles/boot.css';
import React from 'react';
import hima from './data/images/hima.svg';
import { Project } from './components/Project.js';
import LearnButton from './components/Button';
import { Extracurricular } from './components/Extracurricular';
import { projectList, extracurricularList } from './data/Data.js'

function App() {

  return (
    <div className='App'>
      <div className='top-banner'>
        <a className='top-banner' href='https://www.figma.com/file/FjDM56usBMe18h2P81Ieau/portfoliooooooo?node-id=0%3A1'>
          This website is a work in progress. Click here to see the current design progress!
        </a>
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
        <img id="circle" className='hima' src={hima} alt='hima'></img>
      </div>
      <div className='project-section'>
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
    </div>
  );
}

export default App;
