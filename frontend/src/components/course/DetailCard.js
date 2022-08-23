import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";
import StyleIcon from "@mui/icons-material/Style";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";
function DetailCard() {
        const [course, setCourse] = useState("");
        const [tutors, setTutors] = useState("")
        const BaseURL = "http://127.0.0.1:8000/course";
        const UserURL = "http://127.0.0.1:8000/user/userprofile";
        const { id } = useParams();
        useEffect(() => {
          axios
            .get(BaseURL + `/${id}`)
            .then((response) => {
              setCourse(response.data);
            })
            .catch((error) => alert(error));
        }, []);
        useEffect(() => {
          axios
            .get(UserURL)
            .then((response) => {
              setTutors(response.data);
            })
            .catch((error) => alert(error));
        }, []);
        const user_id = course.tutor
        // const filtered = tutors.filter((employee) => 
        //   employee.user === user_id
        // );

        console.log(user_id)
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
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
          Tutor: 
        </Typography>
        <Typography variant="h6" mt={2} color="dark">
          Number of Lesson: 33
        </Typography>
        <Typography variant="h6" mt={2} color="dark">
          Duration: 6 Hours
        </Typography>
      </CardContent>
    </Card>
  );
}

export default DetailCard