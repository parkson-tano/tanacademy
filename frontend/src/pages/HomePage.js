import React from 'react'
import Header from '../components/common/Header'
import Navbar from '../components/common/Navbar'
import CoursePage from './CoursePage'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function HomePage() {
  return (
           <div>
        <Header />
        <CoursePage />
    </div>     



  )
}

export default HomePage