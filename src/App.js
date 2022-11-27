import { useState } from "react"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

export default function App() {

  const [loginMessage, setLoginMessage] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  function handleClick(item) {
    if (item.user === '' || item.password === '') {
      setLoginMessage('')
      setIsAuthenticated(prevVal => !prevVal)
    } else if (item.user !== process.env.REACT_APP_USERNAME || item.password !== process.env.REACT_APP_PASSWORD) {
      setLoginMessage('Username or Password are incorrect.')
    } else {
          setLoginMessage('')
          setIsAuthenticated(prevVal => !prevVal)
    }
  }

  return (
    <div className="container mt-5">
      <p style={{color: 'red'}}>{loginMessage}</p>
      {isAuthenticated ? <Dashboard /> : <Login auth={handleClick} />}
    </div>
  )
}