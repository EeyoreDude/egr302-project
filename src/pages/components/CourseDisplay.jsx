import CourseCard from "./CourseCard"
import DemoCourses from "./DemoCourses"

function CourseDisplay(){


    
        return (
            DemoCourses.map((item)=>(
                <CourseCard course = {item}/>
                ))
        )
    }
    
    export default CourseDisplay