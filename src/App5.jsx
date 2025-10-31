import { useState, useEffect } from "react";
const App5 = () => {
    const [count, setCount] = useState(0);
    
    return(
        <>
            <button onClick={() => setCount(count+1)}>+1</button>
            <h1>{count}</h1>
            <h1>{count%2==0 ?"even number" : "odd number"}</h1>
        </>
    )
}
export default App5