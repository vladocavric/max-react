import { useRouteError } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const ErrorPage = () => {
    const error = useRouteError()
    return(
        <div>
            <MainNavigation />
            <h1>There is some error</h1>
            <p>{error.message}</p>
        </div>
        
    )
}

export default ErrorPage