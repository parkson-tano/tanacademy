import React, { useEffect, useState } from 'react'
import Course from '../components/Course'
import axios from 'axios'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
function CoursePage() {
  const [courses, setCourses] = useState("")
  const BaseURL = "https://tano.pythonanywhere.com/course/";

  useEffect(() => {
    axios
    .get(BaseURL)
    .then((response) => {
      setCourses(response.data)
    })
    .catch(error => alert(error) )

  }, [])
  const course = Object.entries(courses).map(([key, value]) => (
    <Course
      coverimage={value.cover_image}
      description={value.description}
      title={value.title}
      amount = {value.amount}
      id = {value.id}
      slug = {value.slug}
    />
  ));

  return (
               <div className='row px-5' id="courses">
      {course}
    </div> 
  );
}

export default CoursePage