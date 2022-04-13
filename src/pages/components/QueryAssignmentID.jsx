import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore";
import { collection, getDocs, query, where} from 'firebase/firestore'
import { toast } from 'react-toastify'
import { db } from "../../firebase.config"

function QueryAssignmentID(id) {

    useEffect ( () => {
        const fetch = async () => {
            const docRef = doc(db, "events", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const ass = {
                    title: docSnap.data().title,
                    course: docSnap.data().course,
                    start: docSnap.data().start.toDate(),
                    end: docSnap.data().end.toDate(),
                    complete: docSnap.data().complete,
                    graded: docSnap.data().graded,
                    grade: docSnap.data().grade,
                    id: doc.id
                }
                console.log("QueryAssignmentID:")
                console.log(ass)
                return ass
            } else {
            // doc.data() will be undefined in this case
                console.log("No such document!");
            }
        }

        fetch()
    }, [id])
}

export default QueryAssignmentID;