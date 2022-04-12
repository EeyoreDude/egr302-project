import { NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function StreamCard({event}){

//for navigation
const navigate = useNavigate()

    return (
        <div className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
        <p className="small float-right font-weight-light">due at {event.end.toLocaleTimeString()}</p>
        <h6>{event.title}</h6>
        <p className="m-2 small w-100">{event.course}</p>
        </div>
    )
}

export default StreamCard