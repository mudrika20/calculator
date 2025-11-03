import { useEffect } from "react";
function Child1(props) {

    useEffect(
         () => {
            props.setX(prev => prev+1)
        },[]
    )

    return(
        <> 
            <h3>my name is {props.name1}</h3>
        </>
    )
}
export default Child1;