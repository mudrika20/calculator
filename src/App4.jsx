import { useState, useEffect } from 'react'
const App4 = () => {
    const [count, setCount] = useState(0);
    const [names, setNames] = useState(["hcd","scxjh"]);
    //useEffect is a hook that is used to add sideffects into ur react comp
    //it runs after inital render only if u add A dependency array
    //dependency array
    //tomorrows ageda learn abt api calls/js promises/nd json
    //TASK==>WAP to show second timer in react
    useEffect(
      () => {
        //to run a code after a delay in JS we use setTimeOut
        setTimeout(() => {
          fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json()) // convert to JSON
      .then((data) => setNames(data)) // update state
      .catch(() => alert("Error fetching users:"));//kaam after timeout
        },5000)//kitne time baad timout in millisec
      },[]
    )
        //tomorows agenda learn abt diff types of api calls,exp=grtPost.... stopwatch app from scratch

    // useEffect(
    //   () => {
      //   fetch("https://jsonplaceholder.typicode.com/users")
      // .then((response) => response.json()) // convert to JSON
      // .then((data) => setNames(data)) // update state
      // .catch(() => alert("Error fetching users:"));
    //   }
    // )
    //how to an API call in react
    //we usually add the API call taht we want to call after initial render after useEffect
    //fetch lib is used to do API calls in react
    //WARP to fetch 10 user names nd print them
    return(
        <>
            {/* <h>mudrika</h>
            <button onClick={() => setCount(count+1)}>add</button>
            <h>{count}</h> */}
            <ul>
                {names.map((obj) => (
                  <>
                    <li>{obj.name}</li>
                  </>
                ))}

            </ul>
        </>
    )
}
export default App4