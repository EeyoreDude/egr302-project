import { useNavigate } from "react-router-dom"

function ActivityStream(event){
    const navigate = useNavigate()

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Stream</h1>
                            <h4 className="font-weight-light">Today</h4>
                                <div className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">due 11:59pm</p>
                                    <h6>Assignment 1</h6>
                                    <p className="m-2 small w-100">Write an essay about something you don't care about.</p>
                            </div>
                            <h4 className="font-weight-light">Tomorrow</h4>
                                <div className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">due 10:30am</p>
                                    <h6>Assignment 2</h6>
                                    <p className="m-2 small w-100">Do a 4MAT on the reading from class.</p>
                                </div>
                                
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityStream;