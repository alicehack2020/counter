import React, { useState } from "react";
import "./App.css"
const App=()=>{
  const [counter,setcounter]=useState(0);

  const inc=()=>{
    setcounter(counter+1) 
  }
  const dec=()=>{
    setcounter(counter-1)
  }

  const double=()=>{
    setcounter(counter*2)
  }

  return (
    <div>
     {
      counter%2===0 ? <h1 className="green">{counter}</h1> : <h1 className="red">{counter}</h1>
     } 

     {/* <h1>{counter}</h1> */}
      <button onClick={inc}>inc</button>
      <button onClick={dec}>dec</button>
      <button onClick={double}>double</button>
    </div>
  )
}

 export default App;