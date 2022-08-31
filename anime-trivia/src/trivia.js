import {useEffect, useState} from 'react'
import './App.css'
function Trivia({questions}) {
    const [hidden, setHidden] = useState(true)
    const [hidden2, setHidden2] = useState(false)
    const [type, setType] = useState(false)
    const [qNum, setQNum] = useState(0)
    const [changeScreen, setChangeScreen] = useState(false)
    const [score, setScore] = useState(0)
    const [ans, setAns] = useState([])
    useEffect(()=>{
        bruhquestions();
    }, []);

    useEffect(()=>{
        if (questions.type === "Boolean"){
            setType(true)
        }else if (questions.type === "Multiple"){
            setType(false)
        }

        bruhquestions();

    }, [qNum])


    
    const nextQuestion = () =>{
        if (qNum > 13){
            setChangeScreen(true)
            setType(false)
        }else{
            setQNum(qNum + 1)
            setHidden(true)
            setHidden2(false)
            
        }
        
    }
    
    const IncorrectAnswer = () =>{
        if (score < 0){
            setScore(0)
            setHidden(false)
            setHidden2(true)
            alert("Incorrect, but you have no points to take")
        }else {
            setScore(score - 10)
            setHidden2(true)
            setHidden(false)
            alert("Incorrect -10")
        }
    }

    const CorrectAnswer = () =>{
        setScore(score + 10)
        setHidden2(true)
        alert("Correct +10")
        setHidden(false)
    }

    const bruhquestions = () =>{

        const answers = [
            {an: questions[qNum].correct_answer, cor: "correct"},
            {an: questions[qNum].incorrect_answers[0], cor: "incorrect"},
            {an: questions[qNum].incorrect_answers[1], cor: "incorrect"},
            {an: questions[qNum].incorrect_answers[2], cor: "incorrect"},
            
        ]

        answers.forEach((element, index) => {
            let rand = Math.floor(Math.random() * 4);
            let a = answers[index];
            let b = answers[rand];
            answers[index] = b;
            answers[rand] = a;
        
        });

        setAns(answers)
        console.log(answers)
    }

    const check = (cor)=>{
        if(cor === "correct"){
            CorrectAnswer()
        }else{
            IncorrectAnswer()
        }
    }

    if(changeScreen && type === false){
        return(
            <>
            <div>
                <h1>Final score: {score.toString()}</h1>
                <button onClick={() => {window.location.reload()}}>Play again</button>
            </div>
            </>
        )
    }else if (type === false && changeScreen === false){
        return( 
            <>
            <div className='App'>
                <div className='App-header'>
                    <h1>Question number {qNum + 1}</h1>
                    <h2>Score: {score.toString()}</h2>
                    <h1>{questions[qNum].question}</h1>
                    {
                        ans.map((answ, index) => (
                            <>
                            <button hidden={hidden2} onClick={()=>{check(answ.cor)}}>{answ.an}</button>
                            </>
                        ))
                    }
                    <button hidden={hidden} onClick={nextQuestion}>Next Question</button>
                </div>
            </div>
            </>
        )
    }else if (type === true && changeScreen === false){
        return( 
            <>
            <div>
                <div>
                    <h1>Question number {qNum + 1}</h1>
                    <h2>Score: {score.toString()}</h2>
                    <h1>{questions[qNum].question}</h1>      
                    <button hidden={hidden2} onClick={CorrectAnswer}>{questions.correct_answer}</button>
                    <button hidden={hidden2} onClick={IncorrectAnswer}>{questions.incorrect_answers[0]}</button>
                    <button hidden={hidden} onClick={nextQuestion}>Next Question</button>
                </div>
            </div>
            </>
        )

    }
}

export default Trivia