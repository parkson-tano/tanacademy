import { Typography } from '@mui/material';
import { height } from '@mui/system';
import React from 'react'
import ReactPlayer from "react-player";
function Content({urls, title}) {
  return (
    <>
          <Typography
        variant="h5"
        sx={{
          fontFamily: "Raleway",
          fontWeight: "bold",
          textTransform: 'uppercase'
          
        }}
      >
        {title}
      </Typography>
      <ReactPlayer
        fullwidth
        url={urls}
        style={{
          backgroundColor: "black",
          backgroundImage: `url("https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600")`,
        }}
        controls={true}
        light={true}
        height="95vh"
        width="100%"
      />
    </>

  );
}

export default Content