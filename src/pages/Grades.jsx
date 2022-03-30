import { useNavigate } from "react-router-dom"
import React from "react";
import {getAuth} from "firebase/auth"
import {useEffect, useState} from "react"

function Grades(){
    const navigate = useNavigate()
    return (
        <>
            <div className="activityStream">
                <div class="container">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">Grades for </h1>
                            <div id="content-wrapper" class="ic-Layout-contentWrapper">

                            <div className="pageLayout">
                                <thead>
                            <tr>
                            <th scope="col"> Name</th>
                            <th scope="col"> Due</th>
                            <th scope="col" class="status">Status</th>
                            <th scope="col" class="assignment_score"> Score</th>
                            <th scope="col" class="possible"> Out of</th>
                            </tr>
                            </thead>
                            <tbody>
                            <td className="font-weight-light">Assignment 1 </td>
                                <tr className="m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                <td className="small float-right font-weight-light">100</td>
                                    </tr>
                                    
                            
                            <td className="font-weight-light">Assignment 2</td>
                                <tr className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                <td className="small float-right font-weight-light">100</td>
                                
                                </tr>
                             <td className="font-weight-light">Assignment 3</td>
                                <tr className=" m-4 streamCard streamText" onClick={() => navigate('/assignment')}>
                                    <p className="small float-right font-weight-light">--%</p>
                                    
                                </tr>
                                
                                </tbody>
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