import { useState } from "react";
import { useNavigate } from "react-router";

function CourseCard({course}){


    const [cardCourse, setCardCourse] = useState(course);

    //for navigation
    const navigate = useNavigate()

    const semester = cardCourse.semester = undefined ? 'SP2022' : cardCourse.semester;
    const name = cardCourse.name = 'TestClass' ? 'EGR302' : cardCourse.name;

    const url = '/grades/' + semester + '/' + cardCourse.name

        return (
            <div className="m-4 streamCard streamCardBgNormal streamText" onClick={() => navigate(url)}>
            <p className="small float-right font-weight-light">Section: {course.section}</p>
            <h6>{course.name}</h6>
            <p className="m-2 small w-100">{cardCourse.description = undefined ? 'A description of the course!' : cardCourse.description}</p>
            </div>
        )
    }
    
    export default CourseCard