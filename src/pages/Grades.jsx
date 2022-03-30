import { useNavigate } from "react-router-dom"

function Grades(){
    const navigate = useNavigate()
    return (
        <>
            <div className="activityStream">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">Grades</h1>
                            

                            <div className="pageLayout">
                                <tr>
                            <th scope="col"> Name</th>
                            <th scope="col"> Due</th>
                            <th scope="col" class="status">Status</th>
                            <th scope="col" class="assignment_score"> Score</th>
                            <th scope="col" class="possible"> Out of</th>
                            </tr>
                            <h6 className="font-weight-light">Assignment 1</h6>
                                <div className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">100</p>
                                    
                                    
                            </div>
                            <h6 className="font-weight-light">Assignment 2</h6>
                                <div className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">--%</p>
                                
                                </div>
                             <h6 className="font-weight-light">Assignment 3</h6>
                                <div className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">--%</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grades;