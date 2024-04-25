
import { Outlet, RouterProvider, createBrowserRouter, redirect } from 'react-router-dom'
import './App.css'
import SideBar from './components/Sidebar'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import MainPage from './pages/MainPage'
import ContactPage from './pages/ContactPage'
import UpdateProfilePage from './pages/UpdateProfilePage'
import MarketplacePage from './pages/MarketplacePage'

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <div className="flex flex-row h-screen justify-center items-center bg-sky-100">
        <div className="grid grid-cols-12 rounded-lg overflow-hidden h-3/4 shadow-lg max-w-7xl">
          <SideBar />
          <Outlet />
        </div>
      </div>,
    loader: () => {
      return localStorage.getItem("token") ? true : redirect("/login")
    },
    children: [
      {
        path: "",
        element: <MainPage />
      },
      {
        path: "/contact",
        element: <ContactPage />
      },
      {
        path: "/update-profile",
        element: <UpdateProfilePage />
      },
      {
        path: "/marketplace",
        element: <MarketplacePage />
      },
    ]
  },
  {
    path: "/register",
    element: <RegisterPage />
  },
  {
    path: "/login",
    element: <LoginPage />
  }
])

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
