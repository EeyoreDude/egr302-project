import {GoogleLogin} from 'react-google-login'
//import {google} from 'googleapis'

function OAuth({Courses, handleSetCourses}){

    

    const responseGoogle = async (response) =>{
        console.log(response)
        const resCourse = await fetch('https://classroom.googleapis.com/v1/courses',{credentials: "omit", headers:{'Authorization': "Bearer "+[response.accessToken]}})
        const dataCourse = await resCourse.json()

        //const resAssign = await fetch('https://classroom.googleapis.com/v1/courses',{credentials: "omit", headers:{'Authorization': "Bearer "+[response.accessToken]}})
        //const dataAssign = await resCourse.json()

        handleSetCourses(dataCourse.courses)
        console.log(dataCourse)
        //console.log(Courses)
    }
    
        return (
            <>
            <GoogleLogin
            clientId='81956743574-gatqv2f3h7j6t1vo9knrh68qt5p2i7vk.apps.googleusercontent.com'
            buttonText='Login/Sign up with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            scope='https://www.googleapis.com/auth/classroom.courses.readonly  https://www.googleapis.com/auth/classroom.coursework.students.readonly'
            cookiePolicy={"single_host_origin"}
            />
            </>
        )
    }
    
    export default OAuth