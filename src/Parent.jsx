import { useState } from "react";
import Child1 from "./Child1";

function Parent() {
    const [name1, setName1] = useState("abc")
    return(
        <> 
            <Child1 first = {name1} />
        </>
    )
}
export default Parent