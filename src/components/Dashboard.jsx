import Webinar from "./Webinar"
import Downloads from "./Downloads"
import Resources from './Resources'

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="row">
                <Webinar />
                <Downloads />
                <Resources />
            </div>
        </div>
    )
}