import { useEffect, useState } from "react"
import {collection, getDocs, query, where, orderBy, limit, startAfter} from 'firebase/firestore'
import { db } from '../../firebase.config'
import {toast} from 'react-toastify'
import { useParams } from "react-router"

function FirebaseEvents() {
    const [events, setEvents] = useState()
    const [loading, setLoading] = useState(true)

    const params = useParams()

    useEffect( () => {
        const fetchEvents = async () => {
            try{
                const eventsRef = collection(db, 'events')

                const q = query(eventsRef)

                const querySnap = await getDocs(q)

                const events = []

                querySnap.forEach((doc) => {
                    console.log(doc.id, ' => ', doc.data())
                    return events.push({
                        id: doc.id,
                        data: doc.data()
                    })
                })

                setEvents(events)
                setLoading(false)
            }
            catch (error){
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
                            <h1 className="font-weight-light">FirebaseEvents</h1>
                            {loading ? (
                                <h2>Loading...</h2>
                            ) : events && events.length > 0 ? (
                                <>
                                    <ul >
                                        {events.map((event) => (
                                            <h5 key={event.id}>
                                                {event.data.title}
                                                <ul className="h6 small">
                                                    <li>Due: {event.data.start.toDate().toLocaleDateString()} at {event.data.start.toDate().toLocaleTimeString.subStr()}</li>
                                                </ul>
                                            </h5>
                                        ))}
                                    </ul>
                                </>
                            ) : (
                                <p>No events</p>
                            )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
	);
}

export default FirebaseEvents