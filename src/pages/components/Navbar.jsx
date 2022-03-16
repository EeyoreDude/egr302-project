import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as SignInIcon } from '../../assets/svg/personIcon.svg'
import { ReactComponent as ActivityStreamIcon } from '../../assets/svg/activityStreamIcon.svg'
import { ReactComponent as HomeIcon } from '../../assets/svg/homeIcon.svg'
import { ReactComponent as GradesIcon } from '../../assets/svg/gradesIcon.svg'
import { ReactComponent as CalendarIcon } from '../../assets/svg/calendarIcon.svg'

function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()
    
    const pathMatchRoute = (route) => {
        if(route === location.pathname){
            return true
        }
    }

    return (
        <>
            <header className="navbar">
                <nav className="navbarNav">
                    <div className="container">
                        <ul className="navbarListItems">
                            <li className="navbarListItem" onClick={() => navigate('/')}>
                                <HomeIcon fill={pathMatchRoute('/') ? '#aaaaaa' : '#757575'} width='48px' height='48px' />
                                <p className={pathMatchRoute('/') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                    Home
                                </p>
                            </li>
                            <li className="navbarListItem" onClick={() => navigate('/activity-stream')}>
                                <ActivityStreamIcon fill={pathMatchRoute('/activity-stream') ? '#aaaaaa' : '#757575'} width='48px' height='48px' />
                                <p className={pathMatchRoute('/activity-stream') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                    Activity Stream
                                </p>
                            </li>
                            <li className="navbarListItem" onClick={() => navigate('/calendar')}>
                                <CalendarIcon fill={pathMatchRoute('/calendar') ? '#aaaaaa' : '#757575'} width='48px' height='48px' />
                                <p className={pathMatchRoute('/calendar') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                    Calendar
                                </p>
                            </li>
                            <li className="navbarListItem" onClick={() => navigate('/grades')}>
                                <GradesIcon fill={pathMatchRoute('/grades') ? '#aaaaaa' : '#757575'} width='48px' height='48px' />
                                <p className={pathMatchRoute('/grades') ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                    Grades
                                </p>
                            </li>
                            <li className="navbarListItem" onClick={() => navigate('/profile')}>
                                <SignInIcon fill={(pathMatchRoute('/profile') || pathMatchRoute('/sign-in') || pathMatchRoute('/sign-up') || pathMatchRoute('/forgot-password') ) ? '#aaaaaa' : '#757575'} width='48px' height='48px' />
                                <p className={(pathMatchRoute('/profile') || pathMatchRoute('/sign-in') || pathMatchRoute('/sign-up') || pathMatchRoute('/forgot-password') ) ? 'navbarListItemNameActive' : 'navbarListItemName'}>
                                    Profile
                                </p>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Navbar;