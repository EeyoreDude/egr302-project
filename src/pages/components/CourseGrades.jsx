import { useState } from 'react';
import CourseCard from './CourseCard';
import DemoCourses from './DemoCourses';


function CourseGrades({}) {

    //TODO: implement this filter with the API

    const current = DemoCourses.filter((item) => item.semester === "SP2022")

    const past = DemoCourses.filter((item) => item.semester != "SP2022")

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