import React from 'react'
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function Navbar() {
  return (
       <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
        <div className="container-fluid">
          <a className="navbar-brand font-bold" href="/">
            TANACADEMY
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav navbar-nav ms-auto me-4 my-3 my-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="#courses"
                >
                  COURSES
                </a>
              </li>
              <li className="nav-item">
                <Button
                  variant="contained"
                  size="medium"
                  color="success"
      
                >
                  <a href="" className="hover:text-white">
                    Enroll Now
                  </a>
                </Button>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">MY ACCOUNT</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
   
  );
}

export default Navbar