import { useEffect, useState } from "react"
import {collection, getDocs, query, where, orderBy, limit, startAfter} from 'firebase/firestore'
import { db } from '../../firebase.config'
import {toast} from 'react-toastify'
import { useParams } from "react-router"

class Event {
    constructor(title, course, start, end, complete, graded, grade){
        this.title = title;
        this.course = course;
        this.start = start;
        this.end = end;
        this.complete = complete;
        this.graded = graded;
        this.grade = grade;
    }

    toString(){
        return this.name + ' is due at ' + this.end;
    }
}

const eventConverter = {
    toFirestore: (event) => {
        return {
            title: event.title,
            course: event.course,
            start: event.start.getMilliseconds(),
            end: event.end.getMilliseconds(),
            complete: event.complete,
            graded: event.graded,
            grad: event.grade
        };
    },
    fromFirestore: (snapshot) => {
        const data = snapshot.data();
        return new Event(data.title, data.course, data.start.toDate(), data.end.toDate(), data.complete, data.graded, data.grade);
    }
}

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
                        data: new Event(doc.data().title, doc.data().course, doc.data().start.toDate(), doc.data().end.toDate(), doc.data().complete, doc.data().graded, doc.data().grade)
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
                                    {events.map( function( event ){ 
                                        return <li>{JSON.stringify(event)}</li>; 
                                    })}
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