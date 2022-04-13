import { useEffect, useState } from "react"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useParams } from "react-router"
import {db} from "../../firebase.config"

const FirebaseEvents = () => {
    // create the events variable
    const [events, setEvents] = useState()

    // not relevant yet
    const [loading, setLoading] = useState(true)
    const params = useParams()

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // connect to the events collection of the database
                const eventsRef = collection(db, 'events')

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
                setEvents(events)

                // not relevant yet
                setLoading(false)

            }
            catch (error) {
                toast.error('Could not fetch events')
            }
        }

        fetchEvents()
    }, [])

	console.log('From Query:')
    console.log(events)

    return events
    
}

export default FirebaseEvents