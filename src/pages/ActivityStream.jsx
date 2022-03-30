import { useNavigate } from "react-router-dom"


function ActivityStream(){
    const navigate = useNavigate()

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Activity Streamm </h1>
                            <div class="one third column alpha"> 
                                <h4 className="font-weight-light">Passed Due</h4>
                                <div className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">due </p>
                                    <h6>Assignment 1</h6>
                                    <p className="m-2 small w-100">Assignment discription</p>
                                    </div>
                            </div>
                         <div class="one third column ">
                            <h4 className="font-weight-light">Today</h4>
                                <div className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">due </p>
                                    <h6>Assignment 2</h6>
                                    <p className="m-2 small w-100">Assignment discription</p>
                            </div>
                        </div>
                            <h4 className="font-weight-light">Tomorrow</h4>
                                <div className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">due </p>
                                    <h6>Assignment 3</h6>
                                    <p className="m-2 small w-100">Assignment discription</p>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ActivityStream;