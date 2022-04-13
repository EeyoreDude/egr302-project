function CourseCard({course}){


    
        return (
            <div className="m-4 streamCard streamText" width = "20pxs">
            <p className="small float-right font-weight-light">Section: {course.section}</p>
            <h6>{course.name}</h6>
            <p className="m-2 small w-100">{course.description}</p>
            </div>
        )
    }
    
    export default CourseCard