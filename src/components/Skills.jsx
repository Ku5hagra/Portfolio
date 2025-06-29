import React, { useEffect, useRef, useState } from "react";
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
  { img: html, name: "HTML", level: 90 },
  { img: css, name: "CSS", level: 70 },
  { img: react, name: "React", level: 50 },
  { img: js, name: "JavaScript", level: 50 },
  { img: bs, name: "Bootstrap", level: 85 },
  { img: java, name: "Java", level: 70 },
  { img: python, name: "Python", level: 65 },
  { img: flask, name: "Flask", level: 40 },
  { img: mysql, name: "MySQL", level: 50 },
];

export default function Skills() {
  return (
    <div className="container pt-5 pb-5">
      <div className="row justify-content-center">
        {skills.map((skill, index) => (
          <div key={index} className="col-4 col-sm-4 col-md-4 mb-4 text-center">
            <SkillCircle skill={skill} />
          </div>
        ))}
      </div>
    </div>
  );
}

function SkillCircle({ skill }) {
  const circleRef = useRef(null);
  const [offset, setOffset] = useState(2 * Math.PI * 52); // full offset (empty ring)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const targetOffset =
            (2 * Math.PI * 52 * (1 - skill.level / 100)).toFixed(2);
          setOffset(targetOffset);
        } else {
          // reset if you want it to re-animate every time
          setOffset(2 * Math.PI * 52);
        }
      },
      { threshold: 0.5 } // 50% of element in view
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [skill.level]);

  return (
    <div className="skill-circle" ref={circleRef}>
      <svg className="progress-ring" width="120" height="120">
        <circle
          className="progress-ring__background"
          stroke="#eee"
          strokeWidth="8"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
        />
        <circle
          className="progress-ring__circle"
          stroke="url(#grad)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="transparent"
          r="52"
          cx="60"
          cy="60"
          style={{
            strokeDasharray: `${2 * Math.PI * 52}`,
            strokeDashoffset: offset,
          }}
        />
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "rgb(0, 153, 255)" }} />
            <stop offset="100%" style={{ stopColor: "rgb(0, 255, 251)" }} />
          </linearGradient>
        </defs>
      </svg>
      <div className="img-wrapper">
        <img src={skill.img} alt={skill.name} />
        <div className="level-text">{skill.level}%</div>
      </div>
      <p className="mt-2 mb-0">{skill.name}</p>
    </div>
  );
}
