import { useEffect, useState } from "react"
import { collection, getDocs, query, where} from 'firebase/firestore'
import { toast } from 'react-toastify'
import { db } from "../../firebase.config"

const QueryAssignmentID = (id) => {

    console.log(id)

    const [assignment, setAssignment] = useState()

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // connect to the events collection of the database
                const eventsRef = collection(db, 'events', id)

                // make the query to the firebase
                const q = query(eventsRef)

                // the firebase returns a 'snapshot' in response to the query
                // save this
                const querySnap = await getDocs(q)

                const events = []

                // Save the data from firebase to an array with the proper fields
                // essentially converting from a snapshot to an array
                querySnap.forEach((doc) => {
                    return events.push({
                        title: doc.data().title,
                        course: doc.data().course,
                        start: doc.data().start.toDate(),
                        end: doc.data().end.toDate(),
                        complete: doc.data().complete,
                        graded: doc.data().graded,
                        grade: doc.data().grade,
                        id: doc.id
                    })
                })

                // set the events
                setAssignment(assignment)
            }
            catch (error) {
                toast.error('Could not fetch events')
            }
        }

        fetchEvents()
    },[])

    console.log(assignment)
    return assignment;
}

export default QueryAssignmentID;