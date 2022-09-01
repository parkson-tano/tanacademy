import React, {Fragment, useEffect, useState } from 'react'
import { useParams, Link } from "react-router-dom";
import axios from 'axios'
import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from '@mui/material';
import MissedVideoCallTwoToneIcon from "@mui/icons-material/MissedVideoCallTwoTone";
import ReactPlayer from "react-player";
import Content from './Content';

function SideMenu() {
    const { id, slug } = useParams();
    const BaseURL = "https://tano.pythonanywhere.com/enrollment" + `/${id}`;
    const [courses, setCourses] = useState({})
    const [url, setUrl] = useState(
      "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600"
    );
    const [tit, setTit] = useState("")
    // let match = useRouteMatch();

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
      <>
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
                    <Button
                      onClick={() => {
                        setUrl(value.video_url);
                        setTit(value.title);
                      }}
                    >
                      <Link to={`/learn/${id}/${slug}/${value.slug}`}>
                        {value.title}
                      </Link>
                    </Button>
                    {/* <Link href={value.video_url} underline='none'></Link> */}
                  </Typography>
                ))
              : "loading......"}
          </AccordionDetails>
        </Accordion>
      </>
    ));
  return (
    <div className="row mt-3">
      <div className="col col-md-4 col-sm-12 c0l-12 px-1">
        <Typography
          variant="h5"
          sx={{
            fontFamily: "Raleway",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          {courses.course ? courses.course.title : "Loading"}
        </Typography>
        {chap}
      </div>
      <div className="col col-md-8 col-sm-12 col-12 px-1">
        <Content urls={url} title={tit} />
      </div>
    </div>
  );
}

export default SideMenu