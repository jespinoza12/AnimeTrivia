import './App.css';
import {useState, useEffect} from 'react'
import Trivia from './trivia';
function App() {
  //All Questions for Quiz
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState("Easy")
  const [playing, setPlaying] = useState(false)
  useEffect(() => {
    if (difficulty === "Easy"){
      getEasyData()
    }else if (difficulty === "Medium"){
      getMediumData()
    }else if (difficulty === "Hard"){
      getHardData()
    }
  }, [difficulty])

  const getHardData = () => {
    var url = `https://opentdb.com/api.php?amount=15&category=31&difficulty=hard`;
    fetch(url)
      .then(r => r.json(0))
      .then(data => {
        setQuestions(data.results)
        console.log(data.results)
      }).catch(e => console.log(e));
  }
  const getMediumData = () => {
    var url = `https://opentdb.com/api.php?amount=15&category=31&difficulty=medium`;
    fetch(url)
      .then(r => r.json(0))
      .then(data => {
        setQuestions(data.results)
        console.log(data.results)
      }).catch(e => console.log(e));
  }
  const getEasyData = () => {
    var url = `https://opentdb.com/api.php?amount=15&category=31&difficulty=easy`;
    fetch(url)
      .then(r => r.json(0))
      .then(data => {
        setQuestions(data.results)
        console.log(data.results)
      }).catch(e => console.log(e));
  }

  const setStart = () => {
    setPlaying(true)
  }


  
  return (
    
    <div className="App">
      <header className="App-header">
        {
        playing? <Trivia questions = {questions}/> : <div>
        <h1>Difficulty: {difficulty}</h1>
        <button onClick={() => setDifficulty("Easy")}>Easy</button>
        <button onClick={() => setDifficulty("Medium")}>Medium</button>
        <button onClick={() => setDifficulty("Hard")}>Hard</button>
        <button onClick={() => setStart()}>Start Trivia</button>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
