import React from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Login from './Login'
import { Browse } from './Browse'
import Header from './Header'
const Body = () => {
    const appRoutes=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/browse',
            element:<Browse/>
        }
    ])
  return (
    <div >
        
        <RouterProvider router={appRoutes}/>
    </div>
  )
}

export default Body