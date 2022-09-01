import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function Course(props) {
  return (

     <div className="col col-md-4 col-sm-12 px-md-3 mt-2">
      <div className="card">
        <img
          className="card-img-top hover:backdrop-blur-sm"
          src={props.coverimage}
          alt="Card image cap"
        />
        <div className="card-body text-center">
          <h5 className="card-title text-2xl font-extrabold">{props.title}</h5>
          <p className="card-text text-center text-xl mt-3 mb-3">
            {props.description}
          </p>
          <hr style={{border:'1px solid black'}}/>
          <p className="text-left font-bold text-2xl mb-3">
                {props.amount}XAF
          </p>
          <Button variant="contained" size="large" color='success' startIcon={<SendIcon />}>
            <Link to={`/course/${props.id}/${props.slug}`}>
             <p className="hover:text-white">
              See Curriculum
            </p> 
            </Link>
            
          </Button>
        </div>
      </div>
    </div> 
    
  );
}

export default Course;
