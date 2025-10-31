import { useState } from "react"; 
const Calculator = () => {
    const [input, setInput] = useState("")
    const [input1, setInput1] = useState("")
    const [operator, setOperator] = useState("")
    const [visibleString, setVisibleString] = useState("")
    const inputNumber = (obj) => {
        setInput(obj.target.value);
    }
    const onOperatorClick = (sign) => {
        let num1Sign = input+sign;
        setInput1(input);
        setInput("");
        setOperator(sign);
        setVisibleString(num1Sign);
    }
    const onEqualsToClick = () => {
        let num1SignNum2 = visibleString+input+'=';
        setVisibleString(num1SignNum2);
        let num1 = parseFloat(input1);
        let num2 = parseFloat(input);
        let output=0;
        if(operator==='+')
            output=num1+num2;
        if(operator==='-')
            output=num1-num2;
        if(operator==='*')
            output=num1*num2;
        if(operator==='/')
            output=num1/num2;
        setInput(output)
    }
    const onClearClick = () => {
        setInput("");
        setVisibleString("");
    }

    const onPointClick = () => {
        setInput(input+'.');
    }
    return(
        <>
            <input style={{width:"185px"}}
            value={visibleString}
            readOnly={true}
            />
            <br />
            <input style={{width:"185px"}}
            value={input}
            onInput={inputNumber}

            />
            <br />
            <button onClick={() => setInput(input+'0')}>0</button>
            <button onClick={() => setInput(input+'1')}>1</button>
            <button onClick={() => setInput(input+'2')}>2</button>
            <button onClick={() => setInput(input+'3')}>3</button>
            <br />
            <button onClick={() => setInput(input+'4')}>4</button>
            <button onClick={() => setInput(input+'5')}>5</button>
            <button onClick={() => setInput(input+'6')}>6</button>
            <button onClick={() => setInput(input+'7')}>7</button>
            <br />
            <button onClick={() => setInput(input+'8')}>8</button>
            <button onClick={() => setInput(input+'9')}>9</button>
            <button onClick={() => onOperatorClick('+')}>+</button>
            <button onClick={() => onOperatorClick('-')}>-</button>
            <br />
            <button onClick={() => onOperatorClick('*')}>*</button>
            <button onClick={() => onOperatorClick('/')}>/</button>
            <button onClick={onClearClick}>C</button>
            <button style={{width:50}} onClick={onPointClick}>.</button>
            <br />
            <button style={{width:196}}onClick={onEqualsToClick}>=</button>


        </>
    )
}
export default Calculator