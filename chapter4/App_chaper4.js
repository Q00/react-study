import React, { Component } from 'react';

class App extends Component {
  render() {
            const AppStyle = {
                padding:10, margin:10, backgroundColor:this.props.bgColor,
                color:"#333", display:"inline-block", fontFamily:"monospace",
                fontSize:32, textAlign:"center"
            }
            return (<div style={AppStyle}>{this.props.children}</div>);
        };
}

export default App;
