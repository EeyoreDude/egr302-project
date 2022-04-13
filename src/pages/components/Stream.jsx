import StreamCard from "./StreamCard"
import FirebaseEvents from './FirebaseEvents';
import { isEmpty } from "@firebase/util";


function Stream({eventList}) {

    const pastDue = eventList.filter((item) => item.start.getDate() <  new Date().getDate() &&
                                                item.start.getMonth() <=  new Date().getMonth() &&
                                                item.start.getFullYear() === new Date().getFullYear())

    const today = eventList.filter((item) => item.start.getDate() ===  new Date().getDate() &&
                                             item.start.getMonth() ===  new Date().getMonth() &&
                                             item.start.getFullYear() ===  new Date().getFullYear())

    const upcoming = eventList.filter((item) => item.start.getDate() >  new Date().getDate() &&
                                                item.start.getMonth() >=  new Date().getMonth() &&
                                                item.start.getFullYear() ===  new Date().getFullYear())

    // if(pastDue.length === 0){
    //     pastDue.push({
    //         title: "Nothing!",
    //         start: null,
    //         end: null,
    //         course: "",
    //         complete: false,
    //         graded: false,
    //         grade: 0.00
    //     })
    // }

    // if(today.length === 0){
    //     today.push({
    //         title: "Nothing!",
    //         start: null,
    //         end: null,
    //         course: "",
    //         complete: false,
    //         graded: false,
    //         grade: 0.00
    //     })
    // }

    // if(upcoming.length === 0){
    //     upcoming.push({
    //         title: "Nothing!",
    //         start: null,
    //         end: null,
    //         course: "",
    //         complete: false,
    //         graded: false,
    //         grade: 0.00
    //     })
    // }

    //TODO: implement key for event map
return (
    <div className="col-lg-10">
        <h4 className="font-weight-light">Today</h4>
            {today.map((item)=>(
                <StreamCard event = {item}/>
            ))}
        <h4 className="font-weight-light">Upcoming</h4>
            {upcoming.map((item)=>(
                <StreamCard event = {item}/>
            ))}
        <h4 className="font-weight-light">Past Due</h4>
            {pastDue.map((item)=>(
                <StreamCard event = {item}/>
            ))}
     </div>
)
}
export default Stream