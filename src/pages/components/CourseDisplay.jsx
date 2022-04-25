import CourseCard from "./CourseCard"
import DemoCourses from "./DemoCourses"

function CourseDisplay({Courses}){

    //const current = Courses.filter((item) => item.CourseState !== "ACTIVE")
    
        return (
            Courses.map((item)=>(
                <CourseCard course = {item}/>
                ))
        )
    }
    
    export default CourseDisplay