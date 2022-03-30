import { useNavigate } from "react-router-dom"
import StreamCard from "./components/StreamCard"


function Stream({events}) {
    //for navigation
    const navigate = useNavigate()
    
    const today = events

    const upcoming = events

    
return (
    <div className="col-lg-10">
                            <h1 className="font-weight-light">Stream</h1>
                            <h4 className="font-weight-light">Today</h4>
                               
                            <h4 className="font-weight-light">Upcoming</h4>
                                <div className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">due 10:30am</p>
                                    <h6>Assignment 2</h6>
                                    <p className="m-2 small w-100">Do a 4MAT on the reading from class.</p>
                                </div>
                                
                        </div>
)
}
export default Stream