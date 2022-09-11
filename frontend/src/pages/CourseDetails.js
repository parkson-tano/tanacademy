import React, { useEffect, useState } from "react";
import Navbar from '../components/common/Navbar'
import CourseHeader from '../components/course/CourseHeader'
import axios from 'axios'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";
import Curriculum from "../components/course/Curriculum";
import DetailCard from "../components/course/DetailCard";
import Login from "../components/auth/Login";

function CourseDetails() {
    const [course, setCourse] = useState("");
    const BaseURL = "https://tano.pythonanywhere.com/course";
    const {id} = useParams();
    useEffect(() => {
      axios
        .get(BaseURL+`/${id}`)
        .then((response) => {
          setCourse(response.data);
        })
        .catch((error) => alert(error));
    }, []);

    console.log(course.id)

  return (
    <div>
      <CourseHeader
        coverimage={course.cover_image}
        title={course.title}
        description={course.description}
        amount={course.amount}
        course_id={course.id}
      />
      <div className="row px-3 mt-3 container">
        <p className="text-center text-2xl font-bold uppercase p-3">
          Course Curriculum
        </p>
        <div className="col col-lg-8 col-md-12  col-12 mt-5">
          <Curriculum />
        </div>
        <div className="col col-lg-4 col-md-12 col-12 mt-5 sticky-top">
          <DetailCard />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails