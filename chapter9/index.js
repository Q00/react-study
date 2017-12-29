import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
var colors=["#393E41","#E94F37","#1C89BF","#A1D363"];
function showCircle(i){
    var ri=Math.floor(i/4);
    var ran=Math.floor(Math.random()*colors.length);
    var color=colors[ri];
    return <App key={i+color} bgColor={colors[ran]}/>;
}

var cirArr=[];
for(var i=0;i<colors.length*3;i++){
    cirArr.push(showCircle(i));
    console.log(cirArr[i].key);
    
}

ReactDOM.render(<div>{cirArr}</div>, document.getElementById('root'));

