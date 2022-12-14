import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import axios from "axios";
import {
  useParams,
} from "react-router-dom";
function DetailCard() {
        const [course, setCourse] = useState("");
        const [tutors, setTutors] = useState("")
        const [tut, setTut] = useState("")
        const BaseURL = "https://tano.pythonanywhere.com/course";
        const UserURL = "https://tano.pythonanywhere.com/auth/";

        const { id } = useParams();
        useEffect(() => {
          axios
            .get(UserURL)
            .then((response) => {
              setTutors(response.data);
            })
            .catch((error) => alert(error));
        }, []);
        useEffect(() => {
          axios
            .get(BaseURL + `/${id}`)
            .then((response) => {
              setCourse(response.data);
            })
            .catch((error) => alert(error));
        }, []);
        
        const user_id = course.tutor
        const tutor = Object.values(tutors).find((value) => {
          return value.id === user_id;
        })
        let len = course ? course.chapter:'......';
        console.log(len.length);
  return (
    <Card>
      <CardMedia
        component="img"
        style={{
          height: 200,
        }}
        image={course.cover_image}
        alt={course.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          About this Course
        </Typography>
        <hr
          style={{
            border: "2px solid black",
            width: "100px",
          }}
        />

        <Typography variant="h6" mt={2} color="dark">
          Price: {course.amount}XAF
        </Typography>
        <Typography variant="h6" mt={2} color="dark">
          Title: {course.title}
        </Typography>
        <Typography variant="h6" mt={2} color="dark">
          Tutor: {tutor ? tutor.first_name : ""} {tutor ? tutor.last_name : ""}
        </Typography>
        <Typography variant="h6" mt={2} color="dark">
          Number of Chapter: {course ? course.chapter.length : "...."}
        </Typography>
        <Typography variant="h6" mt={2} color="dark">
          Duration: 6 Hours
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DetailCard