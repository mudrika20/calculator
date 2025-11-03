import { useState } from "react";
import Child1 from "./Child1";

function Parent() {
    const [name1, setName1] = useState("abc")
    const [x, setX] = useState(0)

    return(
        <> 
            <h3>{x}</h3>
            <Child1 name1 = {name1} setX = {setX} />
        </>
    )
}
export default Parent