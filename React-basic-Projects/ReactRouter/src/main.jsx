import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'
import { githubInfoLoader } from './loaders/githubLoader.js'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router=createBrowserRouter([
{
  path:'/', /*what thing is going to render it given by element*/
  element:<Layout />,
  children:[
    {path:"",
      element:<Home />
    },
    {
      path:"about",
      element:<About />
    },
     {
      path:"contact",
      element:<Contact />
    },
    {
      path:"user/:userid",
      element:<User />
    },
    {
      path: "github",
      element: <Github />,
      loader: githubInfoLoader
    }
  ]

}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
) 

