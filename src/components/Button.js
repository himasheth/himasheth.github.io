import React, { Component } from "react";
import { Link } from "react-scroll";
import "../styles/styles.scss";

export default class LearnButton extends Component {
  render() {
    return (
        <Link activeClass="active" to="projects" spy={true} smooth={true}>
          <div className='top__button-div'>
            <button className="more" action="https://www.linkedin.com/in/himasheth/"> Connect with me! </button>
          </div>
        </Link>
    );
  }
}
