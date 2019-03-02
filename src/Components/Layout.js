import React,{Component} from 'react';

const topBarstyle = {
    backgroundColor:"rgb(243, 191, 191)",
    height : "20vh",
    width: "100vw",
    position :"relative",
    top:"0"
};
const sideBarstyle = {
    backgroundColor:"rgb(237, 199, 199)",
    height : "100vh",
    width: "8vw",
    float:"left",
    top:"0"
};
class Layout extends Component{
    
        render(){  
        return(
            <div className="layout">
                <div className="top-bar"  style={topBarstyle}></div>
                <div className="side-bar"  style={sideBarstyle}></div>
            </div>
        )
    }
}

export default Layout;