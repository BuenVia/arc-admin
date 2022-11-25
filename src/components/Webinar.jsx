import { useEffect, useState } from "react"
import axios from 'axios'
import WebinarUpdate from "./WebinarUpdate"

export default function Webinar() {

    const [isUpdate, setIsUpdate] = useState(false)

    const [showCurrent, setShowCurrent] = useState({})

    useEffect(() => {
        axios
        .get('http://localhost:9000/api/webinar')
        .then(response => {
            setShowCurrent(response.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    function handleChange() {
        setIsUpdate(prevVal => !prevVal)
    }

    return(
        <div className="col-md-6">
            <h1>Webinar</h1>

            {isUpdate ? <WebinarUpdate /> : 
            <div>
                <p>Title: {showCurrent.title}</p>
                <p>Date: {new Date(showCurrent.date).toDateString()}</p>
                <p>Time: {showCurrent.time}</p>
                <p>Link: {showCurrent.link}</p>
                <button className="btn btn-success" onClick={handleChange} current={showCurrent} >Update</button>
            </div>
            }

        </div>
    )
}