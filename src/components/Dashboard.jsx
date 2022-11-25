import Webinar from "./Webinar"
import Downloads from "./Downloads"

export default function Dashboard() {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="row">
                <Webinar />
                <Downloads />
            </div>
        </div>
    )
}