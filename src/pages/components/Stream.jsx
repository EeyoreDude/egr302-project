

import StreamCard from "./StreamCard"


function Stream({eventList}) {
    
    const pastDue =  eventList.filter((item) => item.start.getDate() <  new Date().getDate() &&
                                                item.start.getMonth() <=  new Date().getMonth() &&
                                                item.start.getFullYear() === new Date().getFullYear())

    const today = eventList.filter((item) => item.start.getDate() ===  new Date().getDate() &&
                                             item.start.getMonth() ===  new Date().getMonth() &&
                                             item.start.getFullYear() ===  new Date().getFullYear())

    const upcoming = eventList.filter((item) => item.start.getDate() >  new Date().getDate() &&
                                                item.start.getMonth() >=  new Date().getMonth() &&
                                                item.start.getFullYear() ===  new Date().getFullYear())

    //TODO: implement key for event map
return (
    <div className="col-lg-10">
                            <h1 className="font-weight-light">Stream</h1>
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