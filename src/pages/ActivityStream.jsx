import { useNavigate } from "react-router-dom"

function ActivityStream(){
    const navigate = useNavigate()

    return (
        <>
            <div className="activityStream">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">Stream</h1>
                            <div className="m-4">
                                <h3>Today</h3>
                                <div className="streamCard" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right">due 11:59pm</p>
                                    <h5>Assignment 1</h5>
                                    <p>Write an essay about something you don't care about.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityStream;