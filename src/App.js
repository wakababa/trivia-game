/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react'
import {Button,Badge,Table} from 'react-bootstrap'
import axios from 'axios';
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {  Route ,Redirect} from 'react-router-dom';
import Home from './components/Home'


class  App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.changeToDifficulty = this.changeToDifficulty.bind(this);
    
    this.state = {
      correctAnswer:[],
      questionNumber:0,
      questions:[],
      gameNext:0,
      justClicked:[],
      score:0,
      finalscore:0,
      wrong:0,
      disable:false,
      gameStarted:false,
      incorrectAnswers:[],
      difficulty:'medium',
      questionUpdate:false,
      selectedDif:false,
      timeStart: false,
      timefrize:true,
      timeisUp:false,
      seconds: 16,

    };

  }
  //https://opentdb.com/api.php?amount=10&category=14&difficulty=medium&type=multiple
  //https://opentdb.com/api.php?amount=10
          
     componentDidMount(){
      const uri =` https://opentdb.com/api.php?amount=10&category=18&difficulty=${this.state.difficulty}&type=multiple`;
      axios.get(uri)
      .then(res => {
          //const quesions = res.data.results[this.state.questionNumber]
          this.setState({
            questions : res.data.results[this.state.questionNumber].question,
            correctAnswer : res.data.results[this.state.questionNumber].correct_answer,
            incorrectAnswers :res.data.results[this.state.questionNumber].incorrect_answers,
            questionUpdate: true,
          })
        });
        
       console.log(this.state.incorrectAnswers)
  
     
      }
  
    handleClick(e,pS) {
      this.setState({
        justClicked: e.target.value,
        gameStarted: true        
      });  
     
    }
    tick() {
      this.setState(state => ({
        seconds: state.seconds - 1
        
      }));
    }

    
 
    componentDidUpdate(){
      console.log(this.state.questionNumber)
      console.log(this.state.gameNext)
   
   
      
       
       // When select a true 
      if(this.state.gameStarted){
      if(this.state.correctAnswer === this.state.justClicked){
        
        this.setState({
          gameStarted : false,
          anwscorrec:true,
          disable:true,
          score: this.state.score + 1,
          questionNumber : this.state.questionNumber +1

        })
        clearInterval(this.interval);
        

      }
      // When select a false
      else{
        alert('Score : ' + this.state.finalscore)
        
        this.setState({
          gameStarted : false,
          disable:true,
          gameNext:0,
          wrong: this.state.wrong + 1,
          finalscore:0,

          questionNumber:0,
          score:0,
          seconds:16,
          timeisUp:false,
          
        
        })
        
     
        
        // this.state.seconds===0 ? console.log('time up ') : alert( 'Score  : ' + this.state.score * this.state.seconds + '    Maximum : 100')
        // alert('Correct Answer :' +this.state.correctAnswer )
        // alert('New Game Started')
      }
    }

      if(this.state.seconds === 0){
        this.setState({
          timeisUp: true,
        })
      }
      

      //When your answer is wrong or time is up
    if(this.state.wrong ===1 || this.state.gameNext ===9 || this.state.timeisUp || this.state.questionNumber===10){
      alert('Score : ' + this.state.finalscore)
      this.setState({
        questionNumber:0,
        gameNext:0,
        score:0,
        wrong:0,
        disable:false,
        seconds:16,
        timeisUp:false,
        finalscore:0,


      })
      

      const uri =` https://opentdb.com/api.php?amount=10&category=18&difficulty=${this.state.difficulty}&type=multiple`;
      axios.get(uri)
      // .then(res => {
      //   console.log(res.data.results[this.state.questionNumber]);
      // })
      .then(res => {
          //const quesions = res.data.results[this.state.questionNumber]
          this.setState({
            questions : res.data.results[this.state.questionNumber].question,
            correctAnswer : res.data.results[this.state.questionNumber].correct_answer,
            incorrectAnswers :res.data.results[this.state.questionNumber].incorrect_answers
          })
        });
        this.state.timeisUp ? alert('Time is Up','Game is started')  : console.log('alert')
      
    }
   
    
  }  
    
    NextQuestion=()=>{
          
      if(this.state.disable){
      this.setState({
        questionNumber: this.state.questionNumber + this.state.gameNext,
        disable:false,
        finalscore: this.state.finalscore + this.state.seconds,
        seconds:16,
        


      })
      const uri =` https://opentdb.com/api.php?amount=10&category=18&difficulty=${this.state.difficulty}&type=multiple`;
      axios.get(uri)
      // .then(res => {
      //   console.log(res.data.results[this.state.questionNumber]);
      // })
      .then(res => {
          //const quesions = res.data.results[this.state.questionNumber]
          this.setState({
            questions : res.data.results[this.state.questionNumber].question,
            correctAnswer : res.data.results[this.state.questionNumber].correct_answer,
            incorrectAnswers :res.data.results[this.state.questionNumber].incorrect_answers
          })
        });
        this.interval = setInterval(() => this.tick(), 1000);
      }
     
        
    }
    changeToDifficulty=(e)=>{
      this.setState({
        difficulty: e.target.value,
        selectedDif:true,
        gameStarted:false,
        timefrize:false,
        timeStart:true,
        seconds:16,
      });  

      this.interval = setInterval(() => this.tick(), 1000);
      console.log(this.state.difficulty)
    }

    
   


 render() {
  return(
    <Router>
    
    <Route path="/difficulty" render={()=>{
      return(
        <div style={{textAlign:'center',position:'relative',top:'300px'}}>
        <h2>Pick A Difficulty</h2>
          <Button style={{width:'300px'}} onClick={this.changeToDifficulty} value="easy" >Easy</Button><p></p>
          <Button style={{width:'300px'}} onClick={this.changeToDifficulty} value="medium">Medium</Button><p></p>
          <Button style={{width:'300px'}} onClick={this.changeToDifficulty} value="hard">Hard</Button><p></p>
          <span><Link to="/">Home</Link></span>
          <span style={{marginLeft:'10px'}}><Link to="/game">Go to Game</Link></span>
        </div>
      )
    }} />
    <Route exact path="/"  component={Home} >
    <Home/>
    </Route>

        <Route path="/game"  render={
          ()=>{
            return( 
               <div  style={{textAlign:'center'}}>
      
      <Table striped bordered hover>
  <tbody>
    <tr>
      <th><h5><Badge>Score</Badge></h5></th>
      <th><h5><Badge>{this.state.finalscore}</Badge></h5></th>
    </tr>
  </tbody>
</Table>
<Link style={{}} to="/difficulty">Back to Section</Link><p></p>
  <div style={{background:'white',border:'1px solid #ec7373',width:'500px',height:'630px',textAlign:'center',marginTop:'30px',position:'relative',left:'470px'}}>
  
  <img style={{width:'200px',height:'130px'}} src="./quiz.png"/>
  
    {/* {<h2 style={{textAlign:'center',marginTop:'25px'}}>Trivia-Game</h2>} */}
    
    <hr></hr>
    <h6 style={{float:'left'}}>
   Difficulty : <Badge variant="secondary">{this.state.difficulty}</Badge>
 </h6>
 <h6 style={{float:'right'}}>
   Time : <Badge variant="danger">{this.state.seconds}</Badge>
 </h6>
    
 <h4 style={{textAlign:'center',marginTop:'85px'}}>{this.state.questions}</h4>
 
  <div style={{marginTop:'125px'}}>
        <Button  style={{float:'right'}}  className="btn btn-primary" onClick={this.NextQuestion}>Next Quesion</Button>

        <h3 style={{float:'left'}}>
   Score : <Badge variant="secondary">{this.state.score}/10</Badge>
 </h3>


 <hr></hr>

 </div>
   <div style={{marginTop:'60px'}}>
 {
   this.state.incorrectAnswers.map(ans=>{
      return(
        <div style={{textAlign:'center',marginTop:'2px'}}  key={ans}>
        <Button  className="btn btn-primary btn-sm"  disabled={this.state.disable} onClick={this.handleClick} value={ans} style={{width:'100%'}}>{ans}</Button><br></br>
        </div> )})
 }
 <Button  className="btn btn-primary btn-sm"  style={{width:'100%',marginTop:'2px'}} disabled={this.state.disable} onClick={this.handleClick} value={this.state.correctAnswer} >{this.state.correctAnswer}</Button>
 </div>
        


  </div>

  </div>)
          }
        }  />
      
   </Router>
    )
    
   }
 }
 

export default App;