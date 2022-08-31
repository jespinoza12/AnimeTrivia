import {useEffect, useState, react} from 'react'

function Trivia({questions}) {
    const [hidden, setHidden] = useState(true)
    const [hidden2, setHidden2] = useState(false)
    const [qNum, setQNum] = useState(0)
    const [changeScreen, setChangeScreen] = useState(false)
    const [score, setScore] = useState(0)

    
    const nextQuestion = () =>{
        if (qNum > 13){
            setChangeScreen(true)
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

    const questions = () =>{

        answers = [
            [questions[qNum].correct_answer]
            [questions[qNum].incorrect_answer]
            [questions[qNum].incorrect_answer]
            [questions[qNum].incorrect_answer]
        ]
    }

    if(changeScreen){
        return(
            <>
            <div>
                <h1>Final score: {score.toString()}</h1>
                <button onClick={() => {window.location.reload()}}>Play again</button>
            </div>
            </>
        )
    }else{
        return( 
            <>
            <div>
                <div>
                    <h1>Question number {qNum + 1}</h1>
                    <h2>Score: {score.toString()}</h2>
                    <h1>{questions[qNum].question}</h1>
                    <button hidden={hidden2} onClick={CorrectAnswer}>{questions[qNum].correct_answer}</button>
                    <button hidden={hidden2} onClick={IncorrectAnswer}>{questions[qNum].incorrect_answers[0]}</button>
                    <button hidden={hidden2} onClick={IncorrectAnswer}>{questions[qNum].incorrect_answers[1]}</button>
                    <button hidden={hidden2} onClick={IncorrectAnswer}>{questions[qNum].incorrect_answers[2]}</button>
                </div>
                <button hidden={hidden} onClick={nextQuestion}>Next Question</button>
            </div>
            </>
        )
    }
}

export default Trivia