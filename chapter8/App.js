import React, { Component } from 'react';


class App extends Component {
  render() {
    var commonStyle={
      margin:0,
      padding:0
    };
    var divStyle ={
      width:250,
      textAlign:"center",
      backgroundColor:"black",
      padding: 40,
      fontFamily: "sans-serif",
      color: "#999",
      borderRadius: 10
    };
    var textStyle={
      emphasis:{
        fontSize: 38,
        ...commonStyle
      },
      smallEmphasis:{
        ...commonStyle
      },
      small:{
        fontSize: 17,
        opacity:0.5,
        ...commonStyle
      }
    };
    return (
      <div style={divStyle}>
        <LightningCounter/>
        <h2 style={textStyle.smallEmphasis}>LIGHTNING STRIKES</h2>
        <h2 style={textStyle.emphasis}>WORLDWIDE</h2>
        <p style={textStyle.small}>(since you loaded this example)</p>
      </div>
    );
  }
}

class LightningCounter extends Component{
  //state 객체의 값 초기화
  constructor(){
    super();
    this.state={
      strikes:0
    };
  }

  //arrow function  사용 -> this를 자동으로 받아줌
  timerTick= () =>{
    this.setState(prevState => {
      strikes:prevState.state.strikes+100
    });
  }


  //타이머를 통하여 초마다 100씩 증가
  componentDidMount(){
    //setInterval(this.timerTick.bind(this),1000);
    setInterval(this.timerTick,1000);
  }

  render () {
    var countStyle={
      color: "#66FFFF",
      fontSize: 50
    };
    var count=this.state.strikes.toLocaleString();
    return (
        <h1 style={countStyle}>{count}</h1>
    );
  }
}


export default App;
