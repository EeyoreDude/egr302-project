import { useState } from "react";
import { useNavigate } from "react-router";

function CourseCard({course}){


    const [cardCourse, setCardCourse] = useState(course);

    //for navigation
    const navigate = useNavigate()

    const url = '/grades/' + cardCourse.semester + '/' + cardCourse.name

        return (
            <div className="m-4 streamCard streamCardBgNormal streamText" onClick={() => navigate(url)}>
            <p className="small float-right font-weight-light">Section: {course.section}</p>
            <h6>{course.name}</h6>
            <p className="m-2 small w-100">{course.description}</p>
            </div>
        )
    }
    
    export default CourseCard