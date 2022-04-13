import StreamCard from "./StreamCard"
import FirebaseEvents from './FirebaseEvents';
import { isEmpty } from "@firebase/util";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


function Stream({eventList}) {

    const [events, setEvents] = useState(eventList);

    const pastDue = events.filter((item) => item.start.getDate() <  new Date().getDate() &&
                                                item.start.getMonth() <=  new Date().getMonth() &&
                                                item.start.getFullYear() === new Date().getFullYear())

    const today = events.filter((item) => item.start.getDate() ===  new Date().getDate() &&
                                             item.start.getMonth() ===  new Date().getMonth() &&
                                             item.start.getFullYear() ===  new Date().getFullYear())

    const upcoming = events.filter((item) => item.start.getDate() >  new Date().getDate() &&
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
                <StreamCard key={item.id} event = {item}/>
            ))}
        <h4 className="font-weight-light">Upcoming</h4>
            {upcoming.map((item)=>(
                <StreamCard key={item.id} event = {item}/>
            ))}
        <h4 className="font-weight-light">Past Due</h4>
            {pastDue.map((item)=>(
                <StreamCard key={item.id} event = {item}/>
            ))}
     </div>
)
}
export default Stream