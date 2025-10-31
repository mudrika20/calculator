import { useState } from "react";
function Todolist()
{
    const [task,setTask] = useState("");
    const [taskList,setTaskList] = useState([]);
    const onInput = (obj) => {
        setTask(obj.target.value);
    }
    const onClickAddTask = () => {
        if(task==="")
            alert("task daal")
        else
        {
            const newTaskList = [...taskList,task];
            setTaskList(newTaskList);
            setTask("");
        }
    }
    const onClickDone = (index) => {
        const updatedList=taskList.filter((task,ind) => ind!==index);
        // for(let i=0;i< taskList.length;i++)
        // {
        //     if(i!==index)
        //         updatedList.push(taskList[i]);
        // }
        setTaskList(updatedList);
    }
    return(
        <>
            <input
                type="string"
                value={task}
                onChange={onInput}
            />
            <button onClick={onClickAddTask}>add task</button>
            <h>today's task</h>
            <ul>
                {taskList.map((task, index) => (
                    <>
                        <li>{task}</li>
                        <button onClick={() => onClickDone(index)}>done</button>
                    </>
            ))}
            </ul>
        </>
    )
}
export default Todolist;