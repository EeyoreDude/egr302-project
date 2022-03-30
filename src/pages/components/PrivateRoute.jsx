import { Navigate, Outlet } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";

const PrivateRoute = () => {
    const { loggedIn, checkingStatus } = useAuthStatus()

    if (checkingStatus) {
        return (
        <div className="pageLayout">
            <div className="container">
                <div className="row align-items-center my-5">
                    <div className="col-lg-5">
                        <h1 className="font-weight-light">Loading...</h1>
                    </div>
                </div>
            </div>
        </div>
        )
    }

    return loggedIn ? <Outlet /> : <Navigate to='/sign-in' />
}

export default PrivateRoute;