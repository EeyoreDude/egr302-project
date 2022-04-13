import { NavItem } from "react-bootstrap"
import { useNavigate } from "react-router-dom"


function CourseGradesCard({course}){

//for navigation
const navigate = useNavigate()

    const url = '/grades/' + 'title'

    return (
        <div className="m-4 streamCard streamText" onClick={() => navigate(url)}>
        <h6>Title</h6>
        <p className="m-2 small w-100">Description</p>
        </div>
    )
}

export default CourseGradesCard