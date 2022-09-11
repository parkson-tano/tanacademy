import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Grid from "@mui/material/Grid"; 
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from 'moment'
import Button from "@mui/material/Button";
import PlayLessonIcon from "@mui/icons-material/PlayLesson";
import { Link } from 'react-router-dom'
const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function MyCourse() {
      const [expanded, setExpanded] = useState(false);

      const handleExpandClick = () => {
        setExpanded(!expanded);
      };

    const [enrollCourse, setEnrollCourse] = useState('')
    const BaseURL = "https://tano.pythonanywhere.com/enrollment/mycourse/1/";
    useEffect(() => {
        axios
        .get(BaseURL)
        .then((response) => {
          setEnrollCourse(response.data)
        })
    }, [])
    const enroll = Object.entries(enrollCourse).map(([key, value]) => (
      (value.paid) ?
       <Grid item xs={12} sm={6}>
        <Card sx={{ maxWidth: 450 }}>
          
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {value.course.title[0]}
              </Avatar>
            }
            action={
              <Button variant="contained" color="success" >
                <Link to={`/learn/${value.id}/${value.course.slug}`} className="hover:text-slate-100">
                  Start Learning
                </Link>
              </Button>
            }
            title={value.course.title}
            subheader={moment(value.date).format("MMMM Do YYYY")}
          />
          <CardMedia
            component="img"
            sx={{ height: "20rem" }}
            image={value.course.cover_image}
            alt="Paella dish"
          />
          <CardContent>
            <Typography variant="body" color="black">
              {value.course.description.substring(0,150)}...
            </Typography>
          </CardContent>
        </Card>
      </Grid> 
      : null
      
    ));
  return (
    <div>
       <Box sx={{flexFlow: 1}}>
        <Grid container spacing={2} p={5}>
         {enroll}   
        </Grid>
        
       </Box>
    </div>
  )
}

export default MyCourse