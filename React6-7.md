빨간색 원에서 자주색 원으로 속성을 전달하려 한다. 


원하는 컴포넌트로 속성을 바로 전달하는 불가능하다. 
이는 리액트의 작동원리에 기인한다. 
리액트는 반드시 부모 컴포넌트에서 직계 자식 컴포넌트로만 
속성이 내려가도록 하는 명령의 연쇄적인 실행만 가능하다. 
또한 자식으로부터 부모로 속성을 거꾸로 올려 보낼 수도 없다.



  문제점 분석  


        var Display = React.createClass({
            render: function(){
                return(
                    <div>
                        <p>{this.props.color}</p>
                        <p>{this.props.num}</p>
                        <p>{this.props.size}</p>
                    </div>
                );
            }
        });

        var Label = React.createClass({
            render: function(){
                return (
                    <Display color={this.props.color} 
                             num={this.props.num}
                             size={this.props.size}/>
                );
            }
        });

        var Shirt = React.createClass ({
            render: function () {
                return (
                    <div>
                        <Label color={this.props.color} 
                             num={this.props.num}
                             size={this.props.size}/>
                    </div>
                );
            }
        });

            var destination = document.querySelector("#container");
    
            ReactDOM.render(
                <div>
                      <Shirt color="steelblue" num="3.14" size="medium"/>
                </div>,
                destination
            );








코드 실행 값은 아래와 같다. 



이 코드의 유일한 문제는 그 값들이 애당초에 ReactDom.render에서 정의됐다는 점이다. 즉, 목적지를 향하는 경로에 있는 모든 컴포넌트들이 각 속성에 접근하고 재정의해 전달하는 것이다.



  스프레드 연산자   


 해결책은 최근 자바스크립트 표준에 포함된 스프레드 연산자에 있다. 




세 개의 값을 갖는 items라는 배열이 있다. 

또한 세 개의 인자를 받는 printStuff 라는 함수도 있다. 

- 흔히 사용하는 방법 : printStuff( items[0], items[1], itmes[2] )

- 스프레드 연산자 방법 : printStuff ( ...items);


        var Display = React.createClass({
            render: function(){
                return(
                    <div>
                        <p>{this.props.color}</p>
                        <p>{this.props.num}</p>
                        <p>{this.props.size}</p>
                    </div>
                );
            }
        });

        var Label = React.createClass({
            render: function(){
                return (
                    <Display {...this.props}/>
                );
            }
        });

        var Shirt = React.createClass ({
            render: function () {
                return (
                    <div>
                        <Label {...this.props}/>
                    </div>
                );
            }
        });

            var destination = document.querySelector("#container");
    
            ReactDOM.render(
                <div>
                      <Shirt color="steelblue" num="3.14" size="medium"/>
                </div>,
                destination
            );



 새로운 문법으로 코드 실행  



        class Display extends React.Component{
            render(){
                return(
                    <div>
                        <p>{this.props.color}</p>
                        <p>{this.props.num}</p>
                        <p>{this.props.size}</p>
                    </div>
                )
            }
        }

        class Label extends  React.Component{
            render(){
                return (
                   /* 
                   <Display color={this.props.color} 
                             num={this.props.num}
                             size={this.props.size}/>
                   */
                   <Display {...this.props}/>

                )
            }
        }

        class Shirt extends  React.Component {
            render() {
                return (
                    /* <div> </div>안에서는 주석 처리가 되지 않으므로
                    밖에서 주석처리 
                    <div>
                       
                        <Label color={this.props.color} 
                             num={this.props.num}
                             size={this.props.size}/>
                             
                    </div>
                    */
                    <Label {...this.props}/>

                )
            }
        }

            var destination = document.querySelector("#container");
    
            ReactDOM.render(
                <div>
                      <Shirt color="steelblue" num="3.14" size="medium"/>
                </div>,
                destination
            );

