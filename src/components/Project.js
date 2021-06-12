//make a function not an object!
import { any, string } from "prop-types";
import React from "react";
import "../styles/styles.scss";

export const Project = (props) => {
  return (
    <div className="project">
      <a href={props.link}><h2 className="project__name"> {props.name}</h2></a>
      <img className="project__image" alt={props.name} src={props.picture}/>
      <p className="project__heading">What It Is: </p>
      <p className="project__description">{props.description}</p>
      <p className="project__heading">My Role: </p>
      <p className="project__role">{props.role}</p>
    </div>
  );
};

Project.propTypes = {
  name: string,
  link: string,
  picture: any,
  description: string,
  role: string,
};
