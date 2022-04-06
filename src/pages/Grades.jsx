import {Link } from "react-router-dom"

function Grades(){
    
    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">Grades</h1>
                            <p>
                                <Link to="/course-grades" className="h6 mt-2 font-weight-light">
									Course Grades Page
								</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Grades;