import React from "react";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid'
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import NetworkCellIcon from "@mui/icons-material/NetworkCell";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function Course(props) {
  return (
    <div className="col-12 col-md-4  px-md-2 mt-2">
      <div className="card hover:py-5">
        <img
          className="hover:backdrop-blur-sm"
          src={props.coverimage}
          alt="Card image cap"
          style={{
            height: 200,
          }}
        />
        <div className="card-body text-center">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography inline variant="body1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <NetworkCellIcon sx={{ fontSize: "large", marginRight:1 }} />
                <span>{props.level}</span>
              </div>
            </Typography>
            <Typography inline variant="body1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <AccessTimeIcon sx={{ fontSize: "large",  marginRight:1 }} />
                <span>{props.duration} hrs</span>
              </div>
            </Typography>
          </div>

          <h5 className="card-title text-xl font-bold mt-3" align="left">
            {props.title}
          </h5>
          <h5 className="mt-3 mb-3" align="right">
            Already Enrolled: {props.enrol}
          </h5>
          <hr style={{ border: "1px solid black" }} />

          <div
            className="mt-3 text-muted"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            <Typography inline variant="body1">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <span>{props.amount}</span> XAF
              </div>
            </Typography>
            <Typography
              inline
              variant="body1"
              component={Link}
              to={`/course/${props.id}/${props.slug}`}
              className="text-primary hover:underline"
              sx={{
                display: "flex",
                alignItems: "center",
                flexWrap: "wrap",
              }}
              color="blue"
            >
              Enroll Now
              <ArrowForwardIosIcon sx={{ fontSize: "medium" }} />
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course;
