export default function Login(props) {
    return (
        <form className="w-3">
            <label className="form-label">Username</label>
            <input type='text' className="form-control" />
            <label className="form-label">Password</label>
            <input type='password' className="form-control" />
            <button className="btn btn-info" onClick={() => {props.auth()}}>Login</button>
        </form>
    )
}