import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Activity from "./Activity";

const styles = {
  card: {
    position: "absolute",
    width: 20 + "%",
    height: 85 + "%",
    marginTop: 10 + "vh",
    marginLeft: 10,
    left: 50 + "%",
    transform: `translate(${-50 + "%"}, ${0}px)`,
    minHeight: 350,
    borderRadius: 10
  }
};

const activityPostStyle = {
  position: "absolute",
  padding: "0.2rem",

  width: "100%",
  marginLeft: "0",
  marginTop: "0.7rem"
  // boxSizing: "border-box"
};
const findStyle = {
  position: "absolute",
  padding: "1rem",
  width: "15rem",
  marginTop: "150%",
  marginLeft: "50%",
  transform: `translate(${-50 + "%"}, ${0}px)`,
  textAlign: "center",
  borderRadius: 1000,
  borderStyle: "solid",
  broderColor: "black"
};

function Activities(props) {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography component="h2" variant="h5" gutterBottom>
          Friend Activity
        </Typography>
        <hr />
        <div style={activityPostStyle}>
          <Activity />
          <Activity />
          <Activity />
        </div>
        <div style={findStyle}>Find Friends</div>
      </CardContent>
      <CardActions />
    </Card>
  );
}

Activities.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Activities);
