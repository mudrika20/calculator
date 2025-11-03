import { useState } from "react";
import QuizQuestions from "./QuizQuestions";
import QuizResult from "./QuizResult";
const Quiz = () => {
    const [submitted ,setSubmitted] = useState(false)
    const [score, setScore] = useState(0);
    
    const wrongAnswer = () => {
        setScore(prev => prev - 1);
    }
    const correcAns = () => {
        setScore(prev => prev + 1);
    }
    

    return(
        <>
            <QuizQuestions wrongAnswer={wrongAnswer} correcAns={correcAns}/>
            <br />
            <button onClick={() => setSubmitted(true)}>SUBMIT</button>
            {submitted && <QuizResult score={score} />}
        </>
    )
}
export default Quiz