import {useEffect, useState} from 'react'

function Trivia({questions}) {
    const [hidden, setHidden] = useState(true)
    const [hidden2, setHidden2] = useState(false)
    const [type, setType] = useState(false)
    const [qNum, setQNum] = useState(-1)
    const [changeScreen, setChangeScreen] = useState(false)
    const [score, setScore] = useState(0)
    const [ans, setAns] = useState([])
    useEffect(()=>{
        bruhquestions();
        setQNum(0)
    }, []);

    useEffect(()=>{
        if (questions.type.toLower() === "boolean"){
            setType(true)
        }else if (questions.type.toLower() === "mltiple"){
            setType(false)
        }
    }, [qNum]);

    
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
            [questions[qNum].correct_answer, CorrectAnswer]
            [questions[qNum].incorrect_answer, IncorrectAnswer]
            [questions[qNum].incorrect_answer, IncorrectAnswer]
            [questions[qNum].incorrect_answer, IncorrectAnswer]
        ]

        answers.forEach((element, index) => {
            let rand = Math.floor(Math.random() * 4);
            let a = answers[index];
            let b = answers[rand];
            answers[index] = b;
            answers[rand] = a;
        
        });

        setAns(answers)
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
            <div>
                <div>
                    <h1>Question number {qNum + 1}</h1>
                    <h2>Score: {score.toString()}</h2>
                    <h1>{questions[qNum].question}</h1>
                    
                    <button hidden={hidden2} onClick={ans[0][1]}>{ans[0][0]}</button>
                    <button hidden={hidden2} onClick={ans[1][1]}>{ans[1][0]}</button>
                    <button hidden={hidden2} onClick={ans[2][1]}>{ans[2][0]}</button>
                    <button hidden={hidden2} onClick={ans[3][1]}>{ans[3][0]}</button>
                </div>
                <button hidden={hidden} onClick={nextQuestion}>Next Question</button>
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
                </div>
                <button hidden={hidden} onClick={nextQuestion}>Next Question</button>
            </div>
            </>
        )

    }
}

export default Trivia