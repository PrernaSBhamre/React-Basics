
import './App.css'
import Card from './Components/Card.jsx'
function App() {
  /*Object is passed*/
 let myobj={
  username:"Prerna",
  age:20
 }
 /*Array can also be passed */
 let myArr=[1,2,3,4]
  return (
    <>
      
      <h1 className='bg-green-400 text-black rounded-xl mb-4'>Tailwind Test</h1>
      <Card prerna="Bhamre" someobj={myobj} newobj={myArr}/>
      <Card btntext="visit me"/>
    </>
  )
}

export default App
