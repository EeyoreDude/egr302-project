import AssignmentCard from "./AssignmentCard"
import FirebaseEvents from './FirebaseEvents';
import { isEmpty } from "@firebase/util";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";


function AssignmentCardManager({ assignments }) {

    if(assignments != undefined && ! assignments.isEmpty){ 
        return (   
            <div className="col-lg-10">
                <h4 className="font-weight-light">Grades</h4>
                {assignments.map((item) => (
                    <AssignmentCard isDull={false} key={item.id} event={item} />
                ))}
            </div>
        )
    } else {
        return (
            <div className="col-lg-10">
                <h4 className="font-weight-light">Grades</h4>
                    <p className="b">No grades!</p>
            </div>
        )
    }
}
export default AssignmentCardManager