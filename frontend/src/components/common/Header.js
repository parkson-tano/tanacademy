import React from "react";
import header from "../../assets/header2.jpg";
import Typewriter from "typewriter-effect";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Header() {
  return (

    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.3)), url(${header})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      <div
        className="col col-md-6 col-sm-12"
        style={{
          marginTop: "8rem",
        }}
      >
        <p className="text-white font-bold text-5xl">
          <Typewriter
            options={{
              strings: ["Learn ", "Improve ", "Harness "],
              autoStart: true,
              loop: true,
            }}
          />
          Tech Skills
        </p>
        <p className="text-white text-xl mt-5">
          We have courses on Frontend, Backend, Full-Stack, Data-Science.
        </p>
        <div className="text-center">
          <button className="btn btn-lg btn-warning mt-5 text-uppercase">
            <a href="#courses">See all Courses</a>
          </button>
        </div>
      </div>
    </div>  
    
  );
}

export default Header;
