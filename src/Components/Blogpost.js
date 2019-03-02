import React, { Component } from "react";


const boxStyle = {
  height: "18rem",
  width: 20 + "rem",
  float: "left",
  margin: "1rem",
  marginTop: 0.3 + "rem"
}
const imgStyle = {
  height: 9 + "rem",
  width: 20 + "rem",
  display: "block"

};

const headingStyle = {
  fontSize: 1.6 + 'rem',
  float: "left",
  padding: 0,
  margin: 0,
  padding: 0.3 + "rem",
};

const seemoreStyle = {
  // float: "left",
  color: "black",
  textDecoration: "none",
  fontSize: 1.2 + "rem",
  float: "right",
  padding: 0.3 + "rem",
  marginRight: "0.4rem"
};

const detailStyle = {
  fontSize: 1 + "rem",
  paddingTop: "1rem ",
  textAlign: "justify",


};

class Blogpost extends Component {
  render() {
    return (
      <div className="" style={boxStyle}>
        <div className="" >
          <img src="../../src/images/eat.jpg" alt="healty living" style={imgStyle} />
        </div>
        <h1 className="heading" style={headingStyle}>
          Blog 1
        </h1>
        <a href="" className="seemore" style={seemoreStyle}>
          See More<i class="fas fa-angle-down"></i>
        </a>


        <h3 className="" style={detailStyle}>
          Lorem ipsum dolor sit amet, consectetur
          30,000 followers
        </h3>
      </div >
    );
  }
}

export default Blogpost;
