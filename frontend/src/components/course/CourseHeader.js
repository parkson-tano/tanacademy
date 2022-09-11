import React, {useEffect} from 'react'
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import {useParam} from 'react-router-dom'
import axios from 'axios'
function CourseHeader(props) {
  const BaseURL = 'https://tano.pythonanywhere.com/enrollment/c'

  const create_enroll = () => {
      axios
        .post(BaseURL, {
          price: props.amount,
          phone: "674128574",
          complete: false,
          paid: false,
          course: props.course_id,
          user: 1,
          payment_method: 1,
        })
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error));
    
  }

  return (
  
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.7)), url(${props.coverimage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        height: "100vh",
        paddingTop: "50px",
      }}
    >
      <div
        className="col col-md-8 col-sm-12"
        style={{
          marginTop: "8rem",
        }}
      >
        <p className="text-white font-extrabold text-5xl p-5">{props.title}</p>
        <div className="p-5">
          <Button
            variant="contained"
            size="large"
            color="primary"
            endIcon={<SendIcon />}
            onClick={create_enroll}
          >
              Start Learning
   
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CourseHeader

