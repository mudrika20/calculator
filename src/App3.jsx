import { useState } from 'react'
import './App.css'

function App3()
{
    const [task, setTask] = useState("")
    const [taskList, setTaskList] = useState([])
    const onInput = (obj) => {
        setTask(obj.target.value);
    }
    const onAdd = () => {
        if(task==="")
        {
            alert("no task added")
            return
        }
        else{
            const newTaskList = [...taskList,task];
            setTaskList(newTaskList)
            setTask("");
        }
    }
    return(
        <>
            <input 
                type="string"
                value={task}
                onChange={onInput}
            />
            <button onClick={onAdd}>ADD</button> 
            <h>today's task</h>
            <ul>
                {taskList.map((task) => (
                <li>{task}</li>
            ))}
            </ul>
        </>
    )
}
export default App3