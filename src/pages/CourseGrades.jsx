import { toast } from "react-toastify"
import { useParams, useNavigate } from "react-router-dom"
import { useEffect, useState } from "react";
import { collection, where, getDocs, query } from "firebase/firestore";
import { db } from "../firebase.config"
import AssignmentCardManager from './components/AssignmentCardManager'

function CourseGrades() {

    const navigate = useNavigate()
    const params = useParams()

    const events = []

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // connect to the events collection of the database
                const eventsRef = collection(db, 'events')

                // make the query to the firebase
                const q = query(eventsRef, where('course', '==', params.courseCode))

                // the firebase returns a 'snapshot' in response to the query
                // save this
                const querySnap = await getDocs(q)

                // Save the data from firebase to an array with the proper fields   
                // essentially converting from a snapshot to an array
                querySnap.forEach((doc) => {
                    return events.push({
                        title: doc.data().title,
                        description: doc.data().description,
                        course: doc.data().course,
                        start: doc.data().start.toDate(),
                        end: doc.data().end.toDate(),
                        complete: doc.data().complete,
                        graded: doc.data().graded,
                        grade: doc.data().grade,
                        id: doc.id
                    })
                })
            }
            catch (error) {
                toast.error('Could not fetch events')
            }
        }

        fetchEvents()
    }, [])

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-10">
                            <h1 className="font-weight-light">{params.courseCode}</h1>
                            <AssignmentCardManager assignments={events} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CourseGrades;