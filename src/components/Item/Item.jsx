import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Item.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'

const Item = ({ products }) => {

    return (
        <div className="card-margin mb-5">
            <Card className="card-color ml-5 mr-5" style={{ width: '18rem' }}>
                <div className='card-title-container'>
                    <Card.Body className="d-flex flex-column align-items-center text-center">
                        <Card.Title>{products.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by {products.author}</Card.Subtitle>
                    </Card.Body>
                </div>
                <div className="card-img-container">
                    <Card.Img className="card-img" src={products.img} />
                </div>
                <Card.Body className="d-flex flex-column align-items-center text-center">
                    <Card.Subtitle className="mb-2">${products.price}</Card.Subtitle>
                    <Link to={`/product/${products.id}`}><Button className="mb-2 buttom-color">See more</Button></Link>
                    <Card.Subtitle className="mb-2 mt-2 text-muted">In Stock: {products.stock}</Card.Subtitle>
                </Card.Body>
            </Card>
        </div>
    )
}

export default Item