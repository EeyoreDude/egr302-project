import { useState } from "react";
import { NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function StreamCard({ event }) {

    const [cardEvent, setCardEvent] = useState(event);

    //for navigation
    const navigate = useNavigate()

    const url = '/course/' + cardEvent.course + '/' + cardEvent.id

    return (
        <div className="m-4 streamCard streamText" onClick={() => navigate(url)}>
            <p className="small float-right font-weight-light">due at {cardEvent.end.toLocaleTimeString() === null ? "" : cardEvent.end.toLocaleTimeString()}</p>
            <h6>{cardEvent.title}</h6>
            <p className="m-2 small w-100">{cardEvent.course}</p>
        </div>
    )
}

export default StreamCard