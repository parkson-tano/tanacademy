import React, {Fragment, useEffect, useState } from 'react'
import { useParams} from 'react-router-dom'
import axios from 'axios'
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, Link } from '@mui/material';
import MissedVideoCallTwoToneIcon from "@mui/icons-material/MissedVideoCallTwoTone";
import ReactPlayer from "react-player";
import Content from './Content';

function SideMenu() {
    const { id } = useParams();
    const BaseURL = "http://127.0.0.1:8000/enrollment" + `/${id}`;
    const [courses, setCourses] = useState({})
    const [url, setUrl] = useState(
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
    );

    useEffect(() => {
         const fetchData = async () => {
           const data = axios
          .get(BaseURL)
          .then((response) => {
            setCourses(response.data);
            console.log(courses);
          })
         };
           fetchData()
           .catch((error) => console.log(error));
    }, [])

    const courseSide = courses.course ? courses.course.chapter: 'loading'
    console.log(courseSide)
    const chap = Object.entries(courseSide).map(([key, value]) => (
      <div>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{value.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            {value.lesson
              ? Object.entries(value.lesson).map(([key, value]) => (
                  <Typography variant="h5" color="blue-gray">
                    <MissedVideoCallTwoToneIcon />
                    <Button onClick={() => setUrl(value.video_url)}>
                      {value.title}
                    </Button>
                    {/* <Link href={value.video_url} underline='none'></Link> */}
                  </Typography>
                ))
              : "loading......"}
          </AccordionDetails>
        </Accordion>
      </div>
    ));
  return (
    <>
    <div className="col col-md-4 col-sm-12 px-5">
      <Typography variant="h5">
        {courses.course ? courses.course.title : "Loading"}
      </Typography>
      {chap}
    </div>
    <Content urls={url}/>
    </>
  );
}

export default SideMenu