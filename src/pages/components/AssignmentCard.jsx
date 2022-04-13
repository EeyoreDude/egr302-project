import { useState } from "react";
import { NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function AssignmentCard({ isDull, event }) {

    const [cardEvent, setCardEvent] = useState(event);

    const style = isDull ? 'streamCardBgOld streamTextOld' : 'streamCardBgNormal streamTextNormal'

    //for navigation
    const navigate = useNavigate()

    const url = '/course/' + cardEvent.course + '/' + cardEvent.id

    return (
        <div className={'m-4 streamCard ' + style} onClick={() => navigate(url)}>
            <p className="small float-right font-weight-light">due at {cardEvent.end.toLocaleTimeString() === null ? "" : cardEvent.end.toLocaleTimeString()}</p>
            <h6>{cardEvent.title}</h6>
            <p className="m-2 small w-100">{cardEvent.graded ? cardEvent.grade + "%" : 'Not graded yet.'}</p>
        </div>
    )
}

export default AssignmentCard