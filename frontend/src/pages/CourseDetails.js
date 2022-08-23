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

function CourseDetails() {
    const [course, setCourse] = useState("");
    const BaseURL = "http://127.0.0.1:8000/course";
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
      <Navbar />
      <CourseHeader
        coverimage={course.cover_image}
        title={course.title}
        description={course.description}
        amount={course.amount}
      />
    </div>

  );
}

export default CourseDetails