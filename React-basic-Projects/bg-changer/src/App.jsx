import { useState } from "react";
function App() {
  const [color, setColor] = useState("olive");
  return (
    <>
      <div
        className="w-full h-screen duration-300"
        style={{
          backgroundColor: color
        }}
      >
        <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white  rounded-3xl px-3 py-2">
            <button onClick={()=>setColor("Red")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Red"
              }}> Red </button>
              <button onClick={()=>setColor("Black")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Black"
              }}>Black </button>
               <button onClick={()=>setColor("Skyblue")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Skyblue"
              }}> Skyblue </button>
               <button onClick={()=>setColor("Yellow")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Yellow"
              }}> Yellow </button>
               <button onClick={()=>setColor("Pink")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Pink"
              }}> Pink</button>
               <button onClick={()=>setColor("Purple")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Purple"
              }}> Purple </button>
               <button onClick={()=>setColor("Orange")}
              className="outline-none px-4 py-2 rounded-full shadow-lg text-white"
              style={{
                backgroundColor: "Orange"
              }}> Orange </button>
        
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
