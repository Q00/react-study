import React, { Component } from 'react';


class App extends Component {
  render() {
    var circleStyle={
      margin:10,
      padding:20,
      display: "inline-block",
      backgroundColor: this.props.bgColor,
      borderRadius: "50%",
      width:100,
      height:100,
    };
    
    return (
      <div style={circleStyle}>
      </div>
    );
  }
}



export default App;

