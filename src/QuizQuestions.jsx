function QuizQuestions(props){
    const questions=[
        {
            question:"1️⃣ Which planet is known as the “Red Planet”?",
            options:["Earth","Venus","Mars","Jupiter"],
            anwer:"Mars"
        }
    ]

    return(
        <>
            <h3>1️⃣ Which planet is known as the “Red Planet”?</h3>
            <button onClick={props.wrongAnswer}></button>
            <button onClick={props.wrongAnswer}>B.Venus</button>
            <button onClick={props.correcAns}>C.Mars</button>
            <button onClick={props.wrongAnswer}>D.Jupiter</button>

            <h3>2️⃣ What is the largest mammal in the world?</h3>
            <button onClick={props.wrongAnswer}>A.Elephant</button>
            <button onClick={props.correcAns}>B.Blue Whale</button>
            <button onClick={props.wrongAnswer}>C.Giraffe</button>
            <button onClick={props.wrongAnswer}>D.Hippopotamus</button>

            <h3>3️⃣ How many sides does a triangle have?</h3>
            <button onClick={props.correcAns}>A.3</button>
            <button onClick={props.wrongAnswer}>B.5</button>
            <button onClick={props.wrongAnswer}>C.6</button>
            <button onClick={props.wrongAnswer}>D.4</button>

            <h3>4️⃣ Who wrote the famous play “Romeo and Juliet”?</h3>
            <button onClick={props.wrongAnswer}>A.Charles Dickens</button>
            <button onClick={props.correcAns}>B.William Shakespeare</button>
            <button onClick={props.wrongAnswer}>C.Mark Twain</button>
            <button onClick={props.wrongAnswer}>D.Jane Austen</button>

            <h3>5️⃣ Which gas do plants absorb from the atmosphere during photosynthesis?</h3>
            <button onClick={props.wrongAnswer}>A.Oxygen</button>
            <button onClick={props.wrongAnswer}> B.Nitrogen</button>
            <button onClick={props.correcAns}>C.Carbon Dioxide</button>
            <button onClick={props.wrongAnswer}>D.Hydrogen</button>
        </>
    )
}
export default QuizQuestions