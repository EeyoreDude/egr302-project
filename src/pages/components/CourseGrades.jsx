import CourseGradesCard from './CourseGradesCard';


function CourseGrades({}) {

    const courses = [
        {
            code: "EGR302",
            semester: "SP2022",
            title: "Jr. Design",
            grade: 99.0
        }, 
        {
            code: "EGR304",
            semester: "SP2022",
            title: "Engineering Cohort",
            grade: 81.7
        },
        {
            code: "EGR326",
            semester: "SP2022",
            title: "Software Design and Architecture",
            grade: 88.1
        },
        {
            code: "EGR222",
            semester: "SP2020",
            title: "Software Engineering",
            grade: 72.3
        }
    ]


    //TODO: implement this filter with the API
    const current = courses.filter((item) => item.semester === "SP2022")

    const past = courses.filter((item) => item.semester != "SP2022")

    //TODO: implement key for event map
return (
    <div className="col-lg-10">
        <h4 className="font-weight-light">Current</h4>
            {current.map((item)=>(
                <CourseGradesCard key={item.semester + item.code} course = {item}/>
            ))}
        <h4 className="font-weight-light">Past</h4>
            {past.map((item)=>(
                <CourseGradesCard key={item.semester + item.code} course = {item}/>
            ))}
     </div>
)
}
export default CourseGrades