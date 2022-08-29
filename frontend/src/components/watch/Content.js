import { height } from '@mui/system';
import React from 'react'
import ReactPlayer from "react-player";
function Content({urls}) {
  return (
    <div className="col col-sm-12 col-md-8 px-md-0 mt-sm-3">
      <ReactPlayer
        fullwidth
        url={urls}
        style={{
          width: "100% !important",
        }}
        controls={true}
        light = {true}
        height="95vh"
        width="100%"
      />
    </div>
  );
}

export default Content