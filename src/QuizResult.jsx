const QuizResult = (props) => {
    
    return(
        <>

            <h3>SCORE:{props.score}/5</h3>
            {props.score>=3 ? <h3 style={{color:"green"}}>PASS</h3> : <h3 style={{color:"red"}}>FAIL</h3>}
        </>
    )
}
export default QuizResult