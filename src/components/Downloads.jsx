import { useEffect, useState } from "react"
import axios from 'axios'

export default function Downloads() {

    const [downloadList, setDownloadList] = useState([])

    useEffect(() => {
        axios
        .get('https://arcsupportservices-api.onrender.com/api/resource')
        .then(response => setDownloadList(response.data))
        .catch(err => console.log(err))
    }, [])

    return(
        <div className="col-md-6">
            <h1>Downloads</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {downloadList.map((download) => {
                        return (
                            <tr key={download._id}>
                                <td>{download.name}</td>
                                <td>{download.email}</td>
                                <td>{new Date(download.date).toDateString()}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}