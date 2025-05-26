import React from "react";
import html from '../assets/html.webp';
import css from '../assets/css.webp';
import js from '../assets/js.webp';
import bs from '../assets/bs.webp';
import react from '../assets/react.webp';
import java from '../assets/java.webp';
import python from '../assets/python.webp';
import flask from '../assets/flask.webp';
import mysql from '../assets/mysql.webp'
export default function Skills() {
  return (
    <div className="container-fluid pl-0 pr-0 pt-5 pb-5 ">
      <div className="d-flex text-center  no-wrap v">
        <div className="col-3 col-md-2 px-3">
          <div className="swipe p-0 h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow  rounded-circle"
                src= {html}
                alt="html"
              />
              <p>
                <span style={{ color: "yellow" }}>★★★</span>
                <span style={{ color: "black" }}></span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe p-0 h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={css}
                alt="css"
              />
              <p>
                <span style={{ color: "yellow" }}>★★</span>
                <span style={{ color: "black" }}>★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe p-0 h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={js}
                alt="javascript"
              />
              <p>
                <span style={{ color: "yellow" }}>★★</span>
                <span style={{ color: "black" }}>★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe  h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={bs}
                alt="bootstrap"
              />
              <p>
                <span style={{ color: "yellow" }}>★★★</span>
                <span style={{ color: "black" }}></span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe  h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={java}
                alt="java"
              />
              <p>
                <span style={{ color: "yellow" }}>★★</span>
                <span style={{ color: "black" }}>★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe  h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={python}
                alt="python"
              />
              <p>
                <span style={{ color: "yellow" }}>★★</span>
                <span style={{ color: "black" }}>★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe  h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={react}
                alt="react"
              />
              <p>
                <span style={{ color: "yellow" }}>★</span>
                <span style={{ color: "black" }}>★★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe  h-100">
            <div className="text-center ">
              <img
                className="img-fluid shadow rounded-circle"
                src={flask}
                alt="flask"
              />
              <p>
                <span style={{ color: "yellow" }}>★</span>
                <span style={{ color: "black" }}>★★</span>
              </p>
            </div>
          </div>
        </div>
        <div className="col-3 col-md-2 px-3">
          <div className="swipe   h-100">
            <div className="text-center ">
              <img
                className="img-fluid  rounded-circle"
                src={mysql}
                alt="mysql"
              />
              <p>
                <span style={{ color: "yellow" }}>★★</span>
                <span style={{ color: "black" }}>★</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
