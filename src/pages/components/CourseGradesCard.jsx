import { useState } from "react";
import { NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function CourseGradesCard({ isDull, course }) {

    const [cardCourse, setCardCourse] = useState(course);

    const style = isDull ? 'streamCardBgOld streamTextOld' : 'streamCardBgNormal streamTextNormal'

    //for navigation
    const navigate = useNavigate()

    const url = '/grades/' + cardCourse.semester + '/' + cardCourse.code

    return (
        <div className={'m-4 streamCard ' + style} onClick={() => navigate(url)}>
            <p className="small float-right font-weight-light">{cardCourse.semester}</p>
            <h6>{cardCourse.title}</h6>
            <p className="m-2 small w-100">{cardCourse.grade}</p>
        </div>
    )
}

export default CourseGradesCard