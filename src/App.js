import './styles/styles.scss';
import React from 'react';
import hima from './data/images/hima_new.png';


function App() {

  return (
    <div className='App'>
      {/* <div className='top__banner'>
        <a className='top__banner' href='https://www.figma.com/file/FjDM56usBMe18h2P81Ieau/portfoliooooooo?node-id=0%3A1'>
          This website is a work in progress. Click here to see the current design progress!
        </a>
      </div> */}
      <div className='top'>
        <img id="circle" className='top__hima' src={hima} alt='hima' />
        <table>
          <div className='top__title'>
            Hi I’m Hima!
          </div>
          <div className='top__subtitle'>
            I’m a dev and aspiring innovator
          </div>
          <div className='top__intro'>
            I&apos;m passionate about <b>tech for social good </b>and hope to
            develop and design impactful, and easy-to-use solutions
            to the world&apos;s problems! I previously interned at Google, HubSpot, and Auvik Networks! This summer I&apos;ll be interning at MongoDB as a Software Engineering Intern!
            <br />
            <br />
            Connect with me on <a href="https://www.linkedin.com/in/himasheth/">Linkedin</a> or shoot me an <a href="mailto:himasheth05@gmail.com">email!</a>
          </div>
          <br />
        </table>
      </div>
    </div>
  )
}
export default App;
