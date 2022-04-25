import React from "react";
import { getAuth, updateProfile } from "firebase/auth"
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom"
import { db } from '../firebase.config'
import { updateDoc, doc } from "firebase/firestore"
import { ReactComponent as EditIcon } from '../assets/svg/editIcon.svg'
import { ReactComponent as CheckIcon } from '../assets/svg/checkIcon.svg'
import { toast } from 'react-toastify'
import OAuth from "./components/OAuth";


function Profile({Courses, handleSetCourses}) {
    const auth = getAuth()

    const [changeDetails, setChangeDetails] = useState(false)

    const [formData, setFormData] = useState({
        name: auth.currentUser.displayName,
        email: auth.currentUser.email,
    })

    const { name, email } = formData

    const navigate = useNavigate()

    const signOut = () => {
        auth.signOut();
        navigate('/')
    }

    const onSubmit = async () => {
        try {
            if (auth.currentUser.displayName !== name) {
                await updateProfile(auth.currentUser, {
                    displayName: name
                })

                const userRef = doc(db, 'users', auth.currentUser.uid)
                await updateDoc(userRef, {
                    name
                })
            }
        } catch (error) {
            toast.error('Could Not Update Profile Details')
        }
    }

    const onChange = (event) => {
        setFormData((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }))
    }

    return (
        <>
            <div className="pageLayout">
                <div className="container">
                    <div className="row align-items-center my-5">
                        <div className="col-lg-5">
                            <h1 className="font-weight-light">My Profile</h1>

                            <main>
                                <div>
                                    Personal Details
                                    <div className="icon-right" onClick={() => {
                                        changeDetails && onSubmit()
                                        setChangeDetails((prevState) => !(prevState))
                                    }}>
                                        {changeDetails ? <CheckIcon fill="#2c2c2c" width='20px' height='20px' /> :
                                            <EditIcon fill="#2c2c2c" width='20px' height='20px' />}
                                    </div>
                                </div>

                                <div className="profileCard">
                                    <form>
                                        <input
                                            type="text"
                                            id="name"
                                            className={!changeDetails ? "profileName" : "profileNameAcitve"}
                                            disabled={!changeDetails}
                                            value={name}
                                            onChange={onChange}
                                        />
                                        <p className={!changeDetails ? "profileEmail" : "profileEmailAcitve"}>
                                            {email}
                                        </p>
                                    </form>

                                </div>
                            </main>

                            <button className="m-0 btn-1 btnDark" onClick={signOut}>Sign Out</button>
                            <OAuth Courses = {Courses} handleSetCourses={handleSetCourses}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile;