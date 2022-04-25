import CourseCard from "./CourseCard"
import DemoCourses from "./DemoCourses"

function CourseDisplay(){

    const current = DemoCourses.filter((item) => item.semester === "SP2022")
    
        return (
            current.map((item)=>(
                <CourseCard course = {item}/>
                ))
        )
    }
    
    export default CourseDisplay