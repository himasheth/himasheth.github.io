//make a function not an object!
import { any, string } from "prop-types";
import React from "react";
import "../styles/App.css";

export const Project = (props) => {
  return (
    <div className="project">
      <a href={props.link}><h2 className="project-name"> {props.name}</h2></a>
      <img className="image" alt={props.name} src={props.picture}></img>
      <p className="gray-heading">What It Is: </p>
      <p className="description">{props.description}</p>
      <p className="gray-heading">My Role: </p>
      <p className="my-role">{props.role}</p>
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
