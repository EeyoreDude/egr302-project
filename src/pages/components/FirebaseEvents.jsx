import { useEffect, useState } from "react"
import { collection, getDocs, query, where, orderBy, limit, startAfter } from 'firebase/firestore'
import { toast } from 'react-toastify'
import { useParams } from "react-router"
import {db} from "../../firebase.config"

// class Event {
//     constructor(title, course, start, end, complete, graded, grade){
//         this.title = title;
//         this.course = course;
//         this.start = start;
//         this.end = end;
//         this.complete = complete;
//         this.graded = graded;
//         this.grade = grade;
//     }

//     toString(){
//         return this.name + ' is due at ' + this.end;
//     }
// }

// const eventConverter = {
//     toFirestore: (event) => {
//         return {
//             title: event.title,
//             course: event.course,
//             start: event.start.getMilliseconds(),
//             end: event.end.getMilliseconds(),
//             complete: event.complete,
//             graded: event.graded,
//             grade: event.grade
//         };
//     },
//     fromFirestore: (snapshot) => {
//         const data = snapshot.data();
//         return new Event(data.title, data.course, data.start.toDate(), data.end.toDate(), data.complete, data.graded, data.grade);
//     }
// }


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
                        grade: doc.data().grade
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

    return events
}

export default FirebaseEvents