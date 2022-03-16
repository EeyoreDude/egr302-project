import { Nav } from "react-bootstrap";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {
    ActivityStream,
    Calendar,
    Grades,
    Home,
    Navbar,
    ForgotPassword,
    SignIn,
    SignUp
} from "./pages/pageExports.js"

function App(){
    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/calendar' element={<Calendar />} />
                    <Route path='/grades' element={<Grades />} />
                    <Route path='/activity-stream' element={<ActivityStream />} />
                    <Route path='/sign-in' element={<SignIn />} />
                    <Route path='/sign-up' element={<SignUp />} />
                    <Route path='/forgot-password' element={<ForgotPassword />} />
                </Routes>
            </Router>
        </>
    )
}

export default App;