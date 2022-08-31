import './App.css';
import {useState, useEffect} from 'react'
import Trivia from './trivia';
function App() {
  //All Questions for Quiz
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState("Easy")
  const [start, setStart] = useState(false)
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

  if (start === true){
    return(
      <Trivia questions={questions}/>
    )
  }else {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to the Anime trivia game</h1>
          <h1>select your difiiculty and hit start</h1>
          <h2>Difficulty: {difficulty}</h2>
          <button onClick={() => setDifficulty("Easy")}>Easy</button>
          <button onClick={() => setDifficulty("Medium")}>Medium</button>
          <button onClick={() => setDifficulty("Hard")}>Hard</button>
          <button onClick={() => setStart(true)}>Start</button>
        </header>
      </div>
    );
  }
}

export default App;
