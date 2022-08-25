import './App.css';
import {useState, useEffect} from 'react'
function App() {
  //All Questions for Quiz
  const [questions, setQuestions] = useState([]);
  const [difficulty, setDifficulty] = useState("Easy")
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

  return (
    <div className="App">
      <header className="App-header">
        <h1>Difficulty: {difficulty}</h1>
        <button onClick={() => setDifficulty("Easy")}>Easy</button>
        <button onClick={() => setDifficulty("Medium")}>Medium</button>
        <button onClick={() => setDifficulty("Hard")}>Hard</button>
        <button>Start Trivia</button>
      </header>
    </div>
  );
}

export default App;
