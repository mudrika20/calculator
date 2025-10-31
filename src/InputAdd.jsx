import { useState } from 'react'
import './App.css'

function InputAdd()
{
    const [num1, setNum1] = useState()
    const [num2, setNum2] = useState()
    const [sum, setSum] = useState()

    const onInputChange1 = (obj) => {
        setNum1(Number(obj.target.value))
    }
    const onInputChange2 = (obj) => {
        setNum2(Number(obj.target.value))
    }
    const addition = () => {
        setSum(num1+num2);
    }
    return(
        <>
            <h1>num1  </h1>
            <input 
            type="number"
            value={num1}
            onChange={onInputChange1}
            />
            <h1> num2  </h1>
            <input
                type="number"
                value={num2}
                onChange={onInputChange2}
            />
            <button onClick={addition} style={{ backgroundColor: "blue", color: "white" }}>add</button>

            <input 
                value
            />
        </>
    )
}
export default InputAdd
