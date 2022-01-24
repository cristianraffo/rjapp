import Spinner from 'react-bootstrap/Spinner'
import './Spinner.css'

const LoadingSpinner = () => {
    return (
        <div className="spin text-center">
            <p>Loading...</p>
            <Spinner animation="border" variant="warning" />
        </div>
    )
}

export default LoadingSpinner;