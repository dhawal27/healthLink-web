import React, { Component } from "react";
import ImageAvatars from "./Avatar";
import Typography from "@material-ui/core/Typography";

const blockStyle = {};
const picStyle = {
  display: "inline-block",
  float: "left",
  padding: "0.5rem",
  maxWidth: "30%",
  height: 80,
  width: 80,
  objectFit: "cover"
  //   maxHeight: "1%"
};
const taskStyle = {
  display: "inline-block",
  float: "left",
  marginLeft: "1rem",
  padding: "0.5rem",
  maxWidth: "60%"
  //   fontSize: "1rem"
};

class Activity extends Component {
  render() {
    return (
      <div className="activity" style={blockStyle}>
        <div className="pic" style={picStyle}>
          <ImageAvatars avatar1Image={"../../src/images/signup_male.png"} />
        </div>

        <div className="task" style={taskStyle}>
          <Typography component="h4" variant="h5" gutterBottom>
            ninja grillz
          </Typography>
          <Typography component="h4" variant="h6" gutterBottom>
            completed 10,000 steps
          </Typography>
          <Typography component="h6" variant="h6" gutterBottom>
            10s ago
          </Typography>
        </div>
      </div>
    );
  }
}

export default Activity;
