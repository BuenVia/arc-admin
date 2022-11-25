import { useState } from "react"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleClick() {
    setIsAuthenticated(prevVal => !prevVal)
  }

  return (
    <div className="container mt-5">
      {isAuthenticated ? <Dashboard /> : <Login auth={handleClick} />}
    </div>
  )
}