import { useEffect, useState, useRef } from "react";
import Button from "./shared/Button";
import { db } from "../firebase.config"
import { addDoc, collection, serverTimestamp } from "firebase/firestore"
import { useNavigate } from 'react-router-dom'
import { getAuth, onAuthStateChanged } from "firebase/auth"

function AddEvent(handleAdd) {
    const [formData, setFormData] = useState({
        title: "title",
        course: "course",
        start: new Date(2022, 3, 12, 12, 0, 0),
        end: new Date(2022, 3, 12, 12, 0, 0),
        complete: false,
        graded: false,
        grade: 0
    })

    const auth = getAuth()
    const navigate = useNavigate()
    const isMounted = useRef(true)

    useEffect(() => {
        if(isMounted){
            onAuthStateChanged(auth, (user) => {
                if(user) {
                    setFormData({...formData, userRef: user.uid})
                } else {
                    navigate('/sign-in')
                }
            })
        }

        return () => {
            isMounted.current = false
        }
    }, [isMounted])

    //new event data state holders
    const [title, setTitle] = useState("");
    const [date, updateDate] = useState();

    //new event data handlers
    const handleTitle = (e) => {
        setTitle(e.target.value);
    };

    const handleDate = (e) => {
        const temp = new Date(e.target.value);
        updateDate(new Date(temp.setDate(temp.getDate() + 1)));

        //const newDateString = e.target.value

        //const year = +newDateString.substring(0,4)
        //const day = +newDateString.substring(5,7)
        //const month = +newDateString.substring(8)

        //updateDate(new Date(year, month, day))
    };

    const addEventHandler = (e) => {
        e.preventDefault();
        const newEvent = {
            title: title,
            start: date,
            end: date,
        };
        handleAdd(newEvent);

        setTitle("");
        //updateDate()
    };

    //event form stuff
    const [addingDate, setAddingDate] = useState(false);

    const showAddEventForm = () => {
        setAddingDate((prev) => {
            return !prev;
        });
    };

    const onSubmit = (e) => {
        
    }

    const addDateForm = (
        <form onSubmit={addEventHandler}>
            <br></br>
            Event Name:
            <br></br>
            <input
                onChange={handleTitle}
                value={title}
                placeholder="Add Event Name"
                type="text"
            />
            <br></br>
            <br></br>
            Event Date:
            <br></br>
            <input type="date" onChange={handleDate} />
            <br></br>
            <br></br>
            <Button isDisabled={title === "" || date === null} type="submit">
                {" "}
                Add Event{" "}
            </Button>
        </form>
    );

    return (
        <div className="">
            <div className="eventFormCard">
                <button onClick={showAddEventForm}>Create New Event</button>
                {addingDate && addDateForm}
            </div>
        </div>
    )
}

export default AddEvent;