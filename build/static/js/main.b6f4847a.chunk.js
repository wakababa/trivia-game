(this["webpackJsonptrivia-game"]=this["webpackJsonptrivia-game"]||[]).push([[0],{37:function(e,t,a){e.exports=a(66)},43:function(e,t,a){},66:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(27),i=a.n(r),o=(a(42),a(43),a(28)),c=a(29),l=a(34),u=a(30),m=a(11),d=a(35),p=a(68),h=a(67),g=a(13),b=a.n(g),w=a(8),y=a(7);var f=function(){return s.a.createElement("div",{style:{textAlign:"center",width:"100%",height:"800px",backgroundImage:'url("https://pbs.twimg.com/media/EPRpzXGWkAER5Ne?format=jpg&name=large")'}},s.a.createElement(p.a,{style:{position:"relative",top:"700px"}},s.a.createElement(w.b,{style:{textDecoration:"none",color:"white",fontSize:"25px"},to:"/game"},"Start Game")))},x=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).NextQuestion=function(){if(a.state.disable){a.setState({questionNumber:a.state.questionNumber+a.state.gameNext,disable:!1});b.a.get(" https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple").then((function(e){a.setState({questions:e.data.results[a.state.questionNumber].question,correctAnswer:e.data.results[a.state.questionNumber].correct_answer,incorrectAnswers:e.data.results[a.state.questionNumber].incorrect_answers})}))}},a.goback=function(){a.setState({questionNumber:2})},a.handleClick=a.handleClick.bind(Object(m.a)(a)),a.state={correctAnswer:[],questionNumber:0,questions:[],gameNext:0,justClicked:[],score:0,wrong:0,disable:!1,gameStarted:!1,incorrectAnswers:[]},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.a.get(" https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple").then((function(t){e.setState({questions:t.data.results[e.state.questionNumber].question,correctAnswer:t.data.results[e.state.questionNumber].correct_answer,incorrectAnswers:t.data.results[e.state.questionNumber].incorrect_answers})}))}},{key:"handleClick",value:function(e,t){this.setState({justClicked:e.target.value,gameStarted:!0})}},{key:"componentDidUpdate",value:function(){var e=this;if(this.state.gameStarted&&(this.state.correctAnswer===this.state.justClicked?this.setState({gameStarted:!1,disable:!0,score:this.state.score+1,questionNumber:this.state.questionNumber+1}):this.setState({gameStarted:!1,disable:!0,gameNext:0,wrong:this.state.wrong+1})),1===this.state.wrong||this.state.score+this.state.wrong===9){this.setState({questionNumber:0,gameNext:0,score:0,wrong:0,disable:!1});b.a.get(" https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple").then((function(t){e.setState({questions:t.data.results[e.state.questionNumber].question,correctAnswer:t.data.results[e.state.questionNumber].correct_answer,incorrectAnswers:t.data.results[e.state.questionNumber].incorrect_answers})})),alert("Your score  : "+this.state.score)}console.log(this.state.score),console.log(this.state.wrong)}},{key:"render",value:function(){var e=this;return s.a.createElement(w.a,null,s.a.createElement(y.a,{exact:!0,path:"/",component:f},s.a.createElement(f,null)),s.a.createElement(y.a,{path:"/game",render:function(){return s.a.createElement("div",{style:{textAlign:"center"}},s.a.createElement("div",{style:{background:"white",border:"1px solid #ec7373",width:"500px",height:"540px",textAlign:"center",marginTop:"60px",position:"relative",left:"470px"}},s.a.createElement("img",{style:{width:"200px",height:"130px"},src:"./quiz.png"}),s.a.createElement("hr",null),s.a.createElement("h4",{style:{textAlign:"center",marginTop:"20px"}},e.state.questions),s.a.createElement("div",{style:{marginTop:"125px"}},s.a.createElement(p.a,{style:{float:"right"},className:"btn btn-primary",onClick:e.NextQuestion},"Next Quesion"),s.a.createElement("h3",{style:{float:"left"}},"Score : ",s.a.createElement(h.a,{variant:"secondary"},e.state.score,"/10")),s.a.createElement("hr",null)),s.a.createElement("div",{style:{marginTop:"60px"}},e.state.incorrectAnswers.map((function(t){return s.a.createElement("div",{style:{textAlign:"center",marginTop:"2px"},key:t},s.a.createElement(p.a,{className:"btn btn-primary btn-sm",disabled:e.state.disable,onClick:e.handleClick,value:t,style:{width:"100%"}},t),s.a.createElement("br",null))})),s.a.createElement(p.a,{className:"btn btn-primary btn-sm",style:{width:"100%",marginTop:"2px"},disabled:e.state.disable,onClick:e.handleClick,value:e.state.correctAnswer},e.state.correctAnswer))))}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.b6f4847a.chunk.js.map