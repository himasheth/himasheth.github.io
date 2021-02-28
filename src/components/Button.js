import React, { Component } from "react";
import { Link } from "react-scroll";
import "../App.css";

export default class LearnButton extends Component {
  render() {
    return (
      <Link activeClass="active" to="projects" spy={true} smooth={true}>
        <button className="more"> Learn more below! </button>
      </Link>
    );
  }
}
