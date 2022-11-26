import { useEffect, useState } from "react"
import axios from 'axios'


export default function Webinar() {

    const [showCurrent, setShowCurrent] = useState({
        title: '',
        date: '',
        time: '',
        link: '',
        show: true,
    })

    const dateConvert = showCurrent.date && new Date(showCurrent.date).toISOString().substring(0,10)

    useEffect(() => {
        axios
        .get('https://arcsupportservices-api.onrender.com/api/webinar')
        .then(response => {
            setShowCurrent(response.data[0])
        })
        .catch(err => console.log(err))
    }, [])

    function handleChange(e) {
        const { name, value, type, checked } = e.target
        setShowCurrent(prevVals => {
            return {
                ...prevVals,
                [name]: type === 'checkbox' ? checked : value
            }
        })
    }

    function handleClick(e) {
        e.preventDefault()
        axios
        .put('https://arcsupportservices-api.onrender.com/api/webinar/update', showCurrent)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return(
        <div className="col-md-6">
            <h1>Webinar</h1>

            <div>

                <form className="row">
                    <div>
                        <label className="form-label">Title</label>
                        <input type='text' name="title" className="form-control" onChange={handleChange} value={showCurrent.title} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Date</label>
                        <input type='date' name="date" className="form-control" onChange={handleChange} value={dateConvert} />
                    </div>
                    <div className="col-md-6">
                        <label className="form-label">Time</label>
                        <input type='time' name='time' className="form-control" onChange={handleChange} value={showCurrent.time} />
                    </div>
                    <div>
                        <label className="form-label">Link</label>
                        <input type='text' name="link" className="form-control" onChange={handleChange} value={showCurrent.link} />
                    </div>
                    <div>
                        <input type='checkbox' name='show' onChange={handleChange} checked={showCurrent.show} />
                        <label className="form-label">Visible</label>
                    </div>
                    <div className="col-md-6">
                        <button className="btn btn-success" onClick={handleClick}>Update</button>
                    </div>
                </form>

            </div>

        </div>
    )
}