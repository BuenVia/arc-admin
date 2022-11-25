export default function WebinarUpdate(props) {

    return (
        <form className="row">
            <div>
                <label className="form-label">Title</label>
                <input type='text' name="title" className="form-control" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Date</label>
                <input type='date' name="date" className="form-control" />
            </div>
            <div className="col-md-6">
                <label className="form-label">Time</label>
                <input type='time' name='time' className="form-control" />
            </div>
            <div>
                <label className="form-label">Link</label>
                <input type='text' name="link" className="form-control" />
            </div>
            <div>
                <label className="form-label">Show?</label>
                <input type='checkbox' />
            </div>
            <div className="col-md-6">
                <button className="btn btn-success">Update</button>
            </div>
            <div className="col-md-6">
                <button className="btn btn-danger">Cancel</button>
            </div>
        </form>
    )
}