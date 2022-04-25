import { useState } from 'react';
import CourseCard from './CourseCard';
import DemoCourses from './DemoCourses';


function CourseGrades({Courses}) {

    //TODO: implement this filter with the API

    const current = Courses.filter((item) => item.courseState === "ACTIVE")

    const past = Courses.filter((item) => item.courseState !== "ACTIVE")

    //TODO: implement key for event map
return (
    <div className="col-lg-10">
        <h4 className="font-weight-light">Current</h4>
            {current.map((item)=>(
                <CourseCard key={item.semester + item.name + item.section} course = {item}/>
            ))}
        <h4 className="font-weight-light">Past</h4>
            {past.map((item)=>(
                <CourseCard key={item.semester + item.name + item.section} course = {item}/>
            ))}
     </div>
)
}
export default CourseGrades