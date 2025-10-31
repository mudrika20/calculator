import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() { // component
  const [count, setCount] = useState(0)

  const onMinusClick = () => { //arrow func in react..callback
    if(count-1<0)
      alert(" or kitna minus karu😡");
    else
      setCount(count-1);
  }
  // const onInputChange = (obj) => {
  //   setName(obj.target.value)
  // }
  return (
    <>
      <button onClick={onMinusClick}>(-)</button>
      <h2>{count}</h2>
      <button onClick={() => setCount(count+1)}>(+)</button>
      {/* <input 
        value={name}
        onChange={onInputChange}
      /> */}
    </>
  )
}

export default App;

