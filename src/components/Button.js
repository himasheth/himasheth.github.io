import React, { Component } from "react";
import { Link } from "react-scroll";
import "../styles/styles.scss";

export default class LearnButton extends Component {
  render() {
    return (
        <Link activeClass="active" to="projects" spy={true} smooth={true}>
          <div className='top__button-div'>
            <button className="more"> Learn more below! </button>
          </div>
        </Link>
    );
  }
}
