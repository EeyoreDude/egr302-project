import { Navigate } from "react-router-dom";
import Stream from "./components/Stream"


function ActivityStream({events}){
    
    if(true){
        <Navigate to='/' />
    }

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <Stream eventList = {events}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityStream;
