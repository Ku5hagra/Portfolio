import React from "react";
import html from "../assets/html.webp";
import css from "../assets/css.webp";
import js from "../assets/js.webp";
import bs from "../assets/bs.webp";
import react from "../assets/react.webp";
import java from "../assets/java.webp";
import python from "../assets/python.webp";
import flask from "../assets/flask.webp";
import mysql from "../assets/mysql.webp";

const skills = [
  { img: html, name: "HTML", rating: 3 },
  { img: css, name: "CSS", rating: 2 },
  { img: js, name: "JavaScript", rating: 2 },
  { img: bs, name: "Bootstrap", rating: 3 },
  { img: java, name: "Java", rating: 2 },
  { img: python, name: "Python", rating: 2 },
  { img: react, name: "React", rating: 1 },
  { img: flask, name: "Flask", rating: 1 },
  { img: mysql, name: "MySQL", rating: 2 },
];

export default function Skills() {
  return (
    <div className="container-fluid pl-0 pr-0 pt-5 pb-5 ">
      <div className="d-flex justify-content-center v no-wrap px-3 overflow-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="col-4 col-sm-2 col-md-2 mb-4  text-center swipe"
            style={{ minWidth: "120px" }}
          >
            <div className="gradient-border"><img
              src={skill.img}
              alt={skill.name}
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: "100px" }}
            /></div>
            <p className="mt-2 mb-0">
              <span className="star" style={{ color: "yellow" }}>
                {"★".repeat(skill.rating)}
              </span>
              <span style={{ color: "black" }}>
                {"★".repeat(3 - skill.rating)}
              </span>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
