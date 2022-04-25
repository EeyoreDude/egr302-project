import {GoogleLogin} from 'react-google-login'
//import {google} from 'googleapis'

function OAuth({Courses, handleSetCourses}){

    

    const responseGoogle = async (response) =>{
        console.log(response)
        const headers = {'Authorization': "Bearer "+[response.accessToken]}
        const res = await fetch('https://classroom.googleapis.com/v1/courses',{credentials: "omit", headers:{'Authorization': "Bearer "+[response.accessToken]}})
        const data = await res.json()

        handleSetCourses(data.courses)
        console.log(data)
        //console.log(Courses)
    }
    
        return (
            <>
            <GoogleLogin
            clientId='81956743574-gatqv2f3h7j6t1vo9knrh68qt5p2i7vk.apps.googleusercontent.com'
            buttonText='Login/Sign up with Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            scope='https://www.googleapis.com/auth/classroom.courses.readonly'
            cookiePolicy={"single_host_origin"}
            />
            </>
        )
    }
    
    export default OAuth