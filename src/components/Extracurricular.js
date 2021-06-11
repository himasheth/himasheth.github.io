//make a function not an object!
import { any, string } from "prop-types";
import React from "react";
import "./Extracurricular.css";

export const Extracurricular = (props) => {
  return (
    <div className="ec">
      <a href={props.link}>
        <h2 className="ec-name"> {props.name}</h2>
      </a>
      <div className="ec-card">
        <img className="ec-image" alt={props.name} src={props.picture}></img>
        <div className="info">
          <p className="gray-heading">What It Is: </p>
          <p className="description">{props.description}</p>
          <p className="gray-heading">My Role: </p>
          <p className="my-role">{props.role}</p>
        </div>
      </div>
    </div>
  );
};

Extracurricular.propTypes = {
  name: string,
  link: string,
  picture: any,
  description: string,
  role: string,
};
