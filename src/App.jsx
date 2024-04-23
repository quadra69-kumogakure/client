
import { Outlet, RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'

const router = createBrowserRouter([
  {
    path : "/",
    element : <>
      <Outlet/>
    </>,
    loader : () => {
      return localStorage.getItem("token") ? true : redirect("/login")
    },
    children : [
      {
        path : "",
        element : <MainPage/>
      }
    ]
  },
  {
    path : "/register",
    element : <RegisterPage/>
  }, 
  {
    path : "/login",
    element : <LoginPage/>
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
