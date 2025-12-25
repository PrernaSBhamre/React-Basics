import { useState } from 'react'

import './App.css'

function App() {
  let [counter, setCounter] = useState(0);
  //let counter=15;
  const addValue=()=>{
     if (counter<=20){
       setCounter(counter+1);
    console.log("Add value",counter);
     }else{
      console.log("Value Exceeded 20");
      
     }
   
  }

  const removeValue=()=>{
    if(counter>=0){
setCounter(counter-1);
    console.log("remove Value",counter)
    }
    else{
      console.log("value is smaller than 0");
      
    }
    
  }

  return (
    <>
     <h1>Welcome to react project</h1>
     <h2>Counter value :{counter}</h2>
     <button onClick={addValue}>Add value{counter}</button>
     <br></br>
     <br></br>
     <button onClick={removeValue}>Remove Value{counter}</button>
    </>
  )
}

export default App
