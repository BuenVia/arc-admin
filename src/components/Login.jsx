import { useState } from "react"

export default function Login(props) {

    const [loginDetails, setLoginDetails] = useState({
        user: '',
        password: ''
    })

    function handleChange(e) {
        const { value, name } = e.target
        setLoginDetails(prevVals => {
            if (name === 'user') {
                return {
                    ...prevVals,
                    user: value
                }
            } else if (name === 'password') {
                return {
                    ...prevVals,
                    password: value
                }
            }
        })
    }

    function handleClick(e) {
        e.preventDefault()
        props.auth(loginDetails)
    }

    return (
        <form className="w-3">
            <label className="form-label">Username</label>
            <input type='text' name="user" className="form-control" onChange={handleChange} value={loginDetails.user} />
            <label className="form-label">Password</label>
            <input type='password' name="password" className="form-control" onChange={handleChange} value={loginDetails.password}/>
            <button className="btn btn-info" onClick={handleClick}>Login</button>
        </form>
    )
}