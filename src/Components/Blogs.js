import React, { Component } from 'react';;
import Blogpost from './Blogpost'

const boxStyle = {
  width: "70rem",
  height: "24rem",
  backgroundColor: "#eee",
  float: "left",
  display: "block"

}

const blogStyle = {
  float: "left",
  display: "inline-block"
}

const headerStyle = {
  marginLeft: 4 + "rem",
  fontSize: 2 + "rem",
  marginBottom: "1rem"
}
const hrStyle = {
  marginLeft: "1rem",
  marginRight: "2rem"
}

const iconStyle = {
  float: "right",
  fontSize: "2rem",
  marginRight: "4rem",
  color: "grey",
  marginTop: "1.3rem"
}

class Blogs extends Component {
  render() {
    return (
      <div className="" style={boxStyle}>
        <div className="" style={iconStyle}>
          <i class="fas fa-less-than" style={{ padding: '1rem' }}></i>
          <i class="fas fa-greater-than"></i>
        </div>
        <h1 style={headerStyle}>Blogs</h1>

        <hr style={hrStyle} />
        <div className="" style={blogStyle}>
          <Blogpost />
          <Blogpost />
          <Blogpost />
        </div>
      </div >
    )
  }
}

export default Blogs 