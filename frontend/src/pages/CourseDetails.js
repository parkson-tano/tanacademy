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

  return (
    <div>
      <CourseHeader
        coverimage={course.cover_image}
        title={course.title}
        description={course.description}
        amount={course.amount}
      />
      <div className="row px-5 py-3 mt-5">
        <p className="text-center text-2xl font-bold uppercase p-3">
          Course Curriculum 
        </p>
        <div className="col col-md-8 col-sm-12 mt-5">
          <Curriculum />
        </div>
        <div className="col col-md-4 col-sm-12 mt-5">
          <DetailCard />
        </div>
      </div>
    </div>
  );
}

export default CourseDetails