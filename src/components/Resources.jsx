import axios from "axios"
import { useEffect } from "react"

export default function Resources() {

    function getResource() {
        const url ='http://localhost:9000/api/resource'
        axios.get(url).then(res => console.log(res.data)).catch(err => console.log(err))
    }

    useEffect(() => {
        getResource()
    }, [])

    return (
        <div className="col-md-6">
            <h1>Resources</h1>
        </div>
    )
}