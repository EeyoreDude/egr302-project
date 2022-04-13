import { useParams } from "react-router-dom"
import QueryAssignmentID from "./components/QueryAssignmentID";

function Assignment(){

    const params = useParams()

    const assignment = QueryAssignmentID(params.assignmentID)

    //TODO: Get assignment id from params and query database for it's data

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">{assignment.title}</h1>
                            <p>...</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Assignment;