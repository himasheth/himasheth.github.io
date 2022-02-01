//make a function not an object!
import { any, string } from "prop-types";
import React from "react";
import "../styles/styles.scss";

export const Experience = (props) => {
    return (
        <div className="exp">
            <div className="exp__job row">
                <a href={props.link}>
                    <h3  className="exp__link">{props.name}</h3>
                </a>
                <h4 className="exp__subheading"> {props.title} || {props.timeframe} </h4>
            </div>
        </div>
    );
};

Experience.propTypes = {
    name: string,
    timeframe: string,
    link: string,
    logo: any,
    title: string,
    role: string,
};
