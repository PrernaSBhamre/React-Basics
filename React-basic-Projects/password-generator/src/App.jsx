import { useState,useCallback,useEffect,useRef  } from 'react'
function App() {
  //useState Hook
  const [length,setLength]=useState(8)
  const[numberAllowed,setNumberAllowed]=useState(false);
 const [characterAllowed, setCharacterAllowed] = useState(false);

  const[password,setPassword]=useState("")

  //useRef hook
   const passwordRef = useRef(null)

  //useCallback Hook
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed){
      str+="0123456789"
    }
    if(characterAllowed){
      str+="!@#$%^&*(){}[]+-_=~`?/"
    }

    for(let i=1;i<=length;i++){
      let char=Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
   return pass
  },[length,numberAllowed,characterAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    
  }

  //usedEffect Hook
   useEffect(()=>{
     passwordGenerator()
   },[length,numberAllowed,characterAllowed,passwordGenerator])

  return (
    <>
     <div className="w-full  max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 text-center bg-gray-800">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidded mb-4">
        <input
          type="text"
          value={password}
          className='outlinne-none w-full py-1 px-3 rounded-lg'
          placeholder="Default Password"
          readOnly
          ref={passwordRef}
        />
        <button className="outline-none mx-2.5 bg-orange-700 text-white px-5 py-0.5 shrink-0 rounded-lg" onClick={copyPasswordToClipboard}>Copy</button>

      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
           <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setLength(e.target.value)}
          name="" 
          id=""
           />
           <label> Length:{length}</label>

        </div>
          <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          onChange={() => {
            setNumberAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="number">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={characterAllowed}
          onChange={() => {
            setCharacterAllowed((prev) => !prev)
          }}
           name=""
          id="" />
          <label htmlFor="charInput">Character</label>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
