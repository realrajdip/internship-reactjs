import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Outline from "./assets/Outline.png";
import logo from "./assets/PNG 3.png";
import group9 from "./assets/Group 9.png";
import search from "./assets/search.png";
import right_arrow from "./assets/rignt_arrow.png";
import lady from "./assets/lady.png";
// import rignt_arrow from "./assets/rignt_arrow.png";
import green_arrow from "./assets/green_arrow.png";
import page_2 from "./assets/page-2.png";
import compa from "./assets/compa.png";
import people from "./assets/people.png";

import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <div id="page-1">
          <div id="nav">
            <div id="logo">
              <img src={logo} alt="" />
            </div>
            <div id="options">
              <a href="/">
                Home <img src={Outline} alt="" />
              </a>
              <a href="/">About Us</a>
              <a href="/">
                Pages <img src={Outline} alt="" />
              </a>
              <a href="/">
                Service <img src={Outline} alt="" />
              </a>
              <a href="/">
                News and Events <img src={Outline} alt="" />
              </a>
              <a href="">Contact US</a>
            </div>
            <div id="details">
              <img src={group9} alt="" />
              <img src={search} alt="" />
              <button>
                GET QUOTE <img src={right_arrow} alt="" />
              </button>
            </div>
          </div>
          <div id="hero">
            <div id="image">
              <img src={lady} alt="" />
            </div>
            <div id="information">
              <p>
                <img src= {green_arrow} alt="" />
                WELCOME TO JYTHU
              </p>
              <br />
              <h1>
                A Marketing <br />
                <div>Agency</div>
                 To Grow <br />
                Your Business
              </h1>
              <div>
                We are 100+ professional software engineers with more than 10
                year of <br />
                experience in delivering superior products Believe it because
                you have <br />
                seen it. Here are real numbers
              </div>
              <div className="buttons">
                <button>GET STARTED</button>
                <div>
                  <img src= {right_arrow} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div id="info">
            <div className="client-satisfaction">
              <img src={people} alt="" />
            </div>
          </div>
        </div>
        <div id="page-2">
          <div className="p-2-info">
            <h2>
              <div>200+ Trusted</div>
              Partners
            </h2>
            <div className="image">
              <img src={compa} alt="" />
            </div>
          </div>
          <div className="data">
            <div className="left">
              <p className="first_p">
                <img src={green_arrow} alt="" />
                ABOUT US
              </p>
              <h2>
                We Want To Give You <br />
                The Best Service
              </h2>
              <p>
                We are 100+ professional software engineers with more <br />
                than 10 year of experience in delivering superior products{" "}
                <br />
                Believe it because you have seen it. Here are real numbers
              </p>
              <div className="years">24</div>
              <div className="text">
                Year <br />
                Experience
              </div>
              <div className="buttons">
                <button>GET STARTED</button>
                <div>
                  <img src={right_arrow} alt="" />
                </div>
              </div>
            </div>
            <div className="right">
              <img src= {page_2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
