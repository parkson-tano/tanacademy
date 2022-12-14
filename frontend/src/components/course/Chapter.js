import React, { useEffect, useState } from 'react'
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import axios from 'axios'
import MissedVideoCallTwoToneIcon from "@mui/icons-material/MissedVideoCallTwoTone";
import {useParams} from 'react-router-dom'




function ListItem(props) {
  // Correct! There is no need to specify the key here:
  return <li>{props.value}</li>;
}

function Chapter() {
    const {id} = useParams()
    const [chapters, setChapters] = useState('')
    const BaseChapter = "https://tano.pythonanywhere.com/course/chapter";
    const [courseDescription, setCourseDescription] = useState("")
    const BaseCourse = `https://tano.pythonanywhere.com/course/${id}`;

  useEffect(() => {
    axios
      .get(BaseCourse)
      .then((response) => {
        setCourseDescription(response.data.description);
      })
      .catch((error) => console.log(error));
  }, []);

    useEffect(() => {
      axios
      .get(BaseChapter)
      .then((response) => {
        setChapters(response.data)
      })
      .catch(error => console.log(error))
    }, [])
    const chapter = Object.entries(chapters)
      .filter(([key, value]) => {
        return value.course == id;
      })
      .map(([key, value]) => (
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography
              style={{
                fontWeight: 600,
                fontSize: 20,
                textTransform: "uppercase",
              }}
            >
              {value.title}
            </Typography>
            
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              style={{
                fontWeight: 300,
                fontSize: 16,
                textTransform: "capitalize",
              }}
            >
              {value.description}
            </Typography>
          </AccordionDetails>
          {value.lesson.map((less) => {
            return (
              <AccordionDetails>
                
                <Typography
                  style={{
                    fontWeight: 300,
                    fontSize: 15,
                    textTransform: "capitalize",
                  }}
                >
                  <MissedVideoCallTwoToneIcon />
                  {less.title}
                </Typography>
              </AccordionDetails>
            );
          })}
        </Accordion>
      ));
        
  return (
    <div>
      <p className="text-justify text-2xl font-bold uppercase mx-3">
        About this Course
      </p>
      <p className="text-justify text-xl mx-3 mb-5">{courseDescription}</p>
      <p className="text-center text-2xl font-bold uppercase mx-3">
       Course outline
      </p>
      {chapter}
    </div>
  );
}

export default Chapter