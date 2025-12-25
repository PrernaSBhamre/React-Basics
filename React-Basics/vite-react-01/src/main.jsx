import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

/*function MyApp(){
  return(
    <div>
      <h1>Custom-App</h1>
    </div>
  )
}*/
/*const ReactElement={
    type:'a',
    props:{
        href:'https://www.google.com',
        target:'_blank',
    },
    Children:'Click me to visit Google'
}*/
const AnotherElement=(
<a href='https://www.google.com' target='_blank'> Visit Google </a>
)

const anothoruser="Bhamre"
const ReactElement1=(
  'a',
  {href:'https://www.google.com',target:'_blank'},
  'Visit Google by create React',
  anothoruser
)
ReactDOM.createRoot(document.getElementById('root')).render(
  
   ReactElement1
)
