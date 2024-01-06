import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'
import './LoaderComponent.css'

const LoaderComponent = ({ loading }) => {

    if (loading) {
        return (
            <div>
                <Spinner animation="border" variant="danger" />
            </div>
        )
    }
    return null
}

export default LoaderComponent