import './styles/styles.scss';
import React from 'react';
import hima from './data/images/hima.png';
import { Project } from './components/Project.js';
import LearnButton from './components/Button';
import { Extracurricular } from './components/Extracurricular';
import { projectList, extracurricularList } from './data/Data.js'

function App() {

  return (
    <div className='App'>
      <div className='top__banner'>
        <a className='top__banner' href='https://www.figma.com/file/FjDM56usBMe18h2P81Ieau/portfoliooooooo?node-id=0%3A1'>
          This website is a work in progress. Click here to see the current design progress!
        </a>
      </div>
      <div className='top'>
        <table>
          <div className='top__title'>
            Hima Sheth’s Design Portfolio
          </div>
          <div className='top__subtitle'>
            I’m a dev and aspiring designer
          </div>
          <div className='top__intro'>
            I’m passionate about <b>tech for social good </b>and hope to
            develop and design impactful, and easy-to-use solutions
            to the world’s problems!
          </div>
          <br />
          <div className='top__button-div'>
            <LearnButton />
          </div>
        </table>
        <img id="circle" className='top__hima' src={hima} alt='hima'/>
      </div>
      <div className='section'>
        <div className='projects'>
          <h2 className='section-heading'>projects.</h2>
          <div className='project-list row'>
            {projectList.map((project) =>
              <Project
                key="0"
                link={project.link}
                name={project.name}
                image={project.image}
                description={project.description}
                role={project.role}
                picture={project.image}
              />
            )}
          </div>
        </div>
      </div>
      <div className='extra-curriculars'>
        <h2 className='section-heading'>extra-curriculars.</h2>
        <div className='project-list row'>
          {extracurricularList.map((ec) =>
            <Extracurricular
              key="0"
              link={ec.link}
              name={ec.name}
              image={ec.image}
              description={ec.description}
              role={ec.role}
              picture={ec.image}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
