import { useEffect, useState } from "react"
import { collection, getDocs, query } from 'firebase/firestore'
import { toast } from 'react-toastify'
import {db} from "../../firebase.config"

// create the events variable
const FirebaseEvents = []

const fetchEvents = async () => {
    try {
        // connect to the events collection of the database
        const eventsRef = collection(db, 'events')

        // make the query to the firebase
        const q = query(eventsRef)

        // the firebase returns a 'snapshot' in response to the query
        // save this
        const querySnap = await getDocs(q)

        // Save the data from firebase to an array with the proper fields
        // essentially converting from a snapshot to an array
        querySnap.forEach((doc) => {
            return FirebaseEvents.push({
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
    }
    catch (error) {
        toast.error('Could not fetch events')
    }
}

fetchEvents()

export default FirebaseEvents