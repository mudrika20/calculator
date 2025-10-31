import { useState } from 'react'
import './App.css'

function App2()
{
    const[toggle, setToggle] = useState(1)
    const[message, setMessage] = useState("hello")
    const[heading, setHeading] = useState("click for goodbye")
    const toggleButton = () => {
        if(toggle%2==0)
        {
            setHeading("click for hello")
            setMessage("goodbye");
        }
        else
        {
            setHeading("click for goodbye")
            setMessage("hello")

        }
        setToggle(toggle+1);
    }
        return(
            <>
                <h>{heading}</h>
                <button onClick={toggleButton}>{message}</button>
            </>
        )
}
export default App2