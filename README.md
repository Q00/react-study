# react-study

## 1장 
리액트 소개 
* 옛 방식의 멀티페이지 디자인.바뀐 내용을 보여줘야하는 거의 모든 경우마다 아예 다른 페이지로 이동한다.
쿠키에 정보를 저장하여 불러 쓰거나 서버의 매커니즘을 제외하고는 신경쓸 것이 없음

* 요즘 방식의 싱글페이지 앱페이스북이나 gmail 같은 경우 메뉴탭이 움직이지 않고 안에 화면만 바뀌고 있다.페이지를 다시 로딩하지 않고 처음에 모든 페이지를 로딩하게 된다.동일한 페이지에서 로딩되거나 언로딩된다.새로고침하거나 다른페이지로 이동하지 않고도 동적으로 컨텐츠를 보여준다.

# 서드파티 프레임워크?

a reusable software component developed to be either freely distributed or sold by an entity other than the original vendor of the development platform.
 add: first party, second party

# 싱글페이지를 만들때 맞닥뜨리는 세가지 이슈

싱글페이지 앱에서는 데이터와 UI의 동기화에 많은 시간을 쏟게된다. => DOM은 속도가 느리다. 
브라우저에서 일어나는 가장 느린 작업에 포함된다.-> 사옹자의 행위에 반응하고 새 콘텐츠를 보여주는 주된 방법이 DOM의 조작이기 때문
html템플릿을 다루는 일은 고통일 수 있다. 자바스크립트로 html템플릿을 작성하는 것은 어렵다.

# 세가지 이슈를 해결할 것은 리액트
리액트의 장점
* UI상태 자동관리    
>1. 리액트는 UI의 마지막 상태만 신경쓰면 된다. 
>2. 상태관리에 대한 모든사항에 대해서 신경쓰지 않아도됨.
* 빠른 돔 조작 
>1. 리액트는 비교조정 reconciliation을 통해서 in-memory virtual dom을 만들어 조작한다. 이 가상돔의 조작은 매우빠르다.
>2. 결합이 용이한 UI를 지원한다.
여러 컴포넌트로 작게 쪼개어 다루도록 권장
그러나 우리나라에서는 view단에 대한 규약이 많이 정해져있지 않기때문에 별로 소용은 없음
>3. 자바스크립트로 정의하는 비쥬얼    
JSX라고 하는 문법을 사용하여 자바스크립트와 호환되면서도 비주얼을 지정할 수 있다.    
하나의 비주얼 컴포넌트의 모양과 동작을 정의하기위해 여러파일을 나눌 필요 없이 비주얼 코드와 자바스크립트가 같은 장소에 존재 -> 올바른 템플릿 작업

--리액트는 완벽한 프레임워크가아니다.비쥬얼한 요소와 그 상태를 최신으로 유지하는 데 중점을 둔 view단에서 작동한다.=> mvc 아키텍처에서 m과 c에 해당하는 부분은 무엇이든 원하는 대로 자유롭게 사용할 수 있다는 의미다.

---

## 2장 첫번째 리액트 앱 jsx다루기
리액트를 사용하여 웹앱을 만들때에는 JSX를 브라우저가 이해할 수 있는 평범한 자바스크립트로 변환시킬 방법이 필요하다.
두가지 해결방법 :
* 노드js 그외 빌드 툴 등으로 구성된 개발 환경을 구축한다. -> JSX의 모든 사항이 자동으로 js로 변환
* JSX를 자동으로 변환하는 js라이브러리를 사용.
>1. 약간복잡하고 시간이 걸리나 오늘날 웹개발의 대표적인 방식
>2. 개발환경에 손을 대는 시간을 절약, 코드 작성에 시간을 더 많이 투자할 수 있음.

# 2번째 방법만 사용하지 않는 이유 -> 브라우저가 JSX를 js로 변환하는데 소요되는 시간으로 브라우저 성능이 저하될 수 있음

# 리액트 시작하기
<pre><code>
<html>
<head>
<meta charset="UTF-8" />
<title>React!React!React!</title>
        <style>
        #container{                
        padding:50px;               
        background-color:#EEE;       
        }            
        #container h1{                
        font-size:48px;                
        font-family:sans-serif;                
        color:#0080A8;            }        </style>    
        </head>
    <body>        
    <div id="container"></div>        
    <script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.23/browser.min.js"></script>        
    <script src="https://fb.me/react-15.0.1.js"></script>        
    <script src="https://fb.me/react-dom-15.0.1.js"></script>            
    <script type="text/babel">            
    ReactDOM.render(                
    <h1>lee jq</h1>,                
    document.querySelector('#container')            
    );         
    </script>    
    </body>
</html>
</code></pre>

---

## 3장 리액트 컴포넌트

# 리액트 컴포넌트와의첫만남
리액트 컴포넌트는 JSX를 통해 HTML엘리먼트를 출력할 수 있는 재사용 가능한 자바스크립트 덩어리다.

# React.createClass 라는 것으로 컴포넌트를 만들 수 있음

<pre><code>
var helloworld= React.createClass({
    render: function(){
        return(
            <p> hello world!</p>
        );
    }
});
</pre></code>

# 호출 하는법
<helloworld /> 이렇게 객체 이름을 태그안에 적어주는 jsx문법을 이용하여
render 메소드에 호출.
React.createElement(helloworld);도 가능

<pre><code>
ReactDOM.render(
    <helloworld/>,
    document.querySelector("#container");
); 
</pre></code>

#함수처럼 여러번 쓰고 싶다면 div태그로 묶어서 사용가능(render는 하나의 엘리먼트만 가능)
<pre><code>
ReactDOM.render(
    <div>
    <helloworld/>
    <helloworld/>
    <helloworld/>
    </div>,
    document.querySelector("#container");
); 
</pre></code>

## 속성지정

속성 값을 지정하여 콤포넌트 정의를 변경할 수 있음
{}로 감싸서 표현식을 만듬
<pre><code>
var helloworld= React.createClass({
    render: function(){
        return(
            <p> hello {this.prop.Target}!</p>
        );
    }
});

ReactDOM.render(

    <div>
    <helloworld Target="JQ"/>
    <helloworld Target="UB"/>
    </div>,
    document.querySelector("#apps")
)
</pre></code>

## 자식 다루기
컴포넌트는 childnode처럼 자식을 가질 수 있음(여러개의 엘리먼트를 rendering할 수 있음)
# this.prop.children 을 사용함

<pre><code>
var Buttonify=React.createClass({

    render: function(){
        return(
            <div>
                <button type={this.prop.behavior}>{this.prop.children}</button>
            </div>
        );
    }
});

ReactDOM.render(
    <div>
        <Buttonify behavior="submit">SEND DATA</Buttonify>
    </div>,
    document.querySelector("#apps");
);
</pre></code>

이렇게 커스텀 속성으로 button 엘리먼트의 타입을 지정할 수 있고 render메소드에서 innerHTML을 접근할 수 있다.
# this.prop.children은 하위 엘리먼트들이 더 있다면 배열을 리턴한다.

