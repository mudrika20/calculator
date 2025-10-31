import { useState, useEffect } from "react";

const StopWatch = () => {
    const [count, setCount] = useState(0);
    const [run, setRun] = useState(false)
    //WAC To display hello world after 5 sec continously...
    useEffect(() => {
        let timer;//timer here(variable) is the
        if(run)
        {
            timer=setInterval(() => {//setInterval performs the task repetatively after the given amount of time
                setCount(prev => {
                    return prev+1;
                })
            },1000)   
        }
        return () => clearInterval(timer);//cleanup func of useEffect/setInterval doesnot have any upper bound limit
        //it will run infinite no.of time therefore we use clearInterval() to stop setInterval()
    },[run])


    return(
        <div style={{backgroundColor:"blue", width:"100vw", height:"100vw", margin:"-29px", padding:"0px"}}>
            <h1 style={{color:"red", marginLeft:"650px", marginTop:"100px"}}>{count}</h1>
            <button style={{backgroundColor:"black", marginLeft:"480px", width:"120px" }} onClick={() => setRun(true)}>START</button>
            <button style={{backgroundColor:"black", marginLeft:"10px", width:"120px" }} onClick={() => setRun(false)}>STOP</button>
            <button style={{backgroundColor:"black", marginLeft:"10px", width:"120px" }} onClick={() => setCount(0)}>RESET</button>

        </div>
    )
}
export default StopWatch