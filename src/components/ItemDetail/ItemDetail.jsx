import React, { useContext, useState } from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'
import CartContext from '../../context/CartContext'


const ItemDetail = ({id, author, category, img, name, price, stock, description }) => {

    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(CartContext)

    const onAdd = (quantity) => {
        setQuantity(quantity)
        const newProduct = {id, author, category, img, name, price, stock}
        addItem(newProduct, quantity)
        console.log(`You added ${quantity} products`)
    }

    return (
        <div>
            <Container>
                <Card className="text-center">
                    <Card.Header>Book details</Card.Header>
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Subtitle>By {author}</Card.Subtitle>
                        <div className='detail-card-body'>
                            <Card.Img src={img} />
                            <div>
                                <h5>Description:</h5>
                                <Card.Text>
                                    {description}
                                </Card.Text>
                                <br />
                                <Card.Text>Genre: {category}</Card.Text>
                                <br />
                                <h6>Price: ${price}</h6>
                            </div>
                        </div>
                        {quantity > 0 ? <Link to={`/cart`}><Button className="mb-2 buttom-color">Go to cart</Button></Link> :
                            <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
                        }
                    </Card.Body>
                    <Card.Footer className="text-muted">Left in Stock: {stock}</Card.Footer>
                </Card>
            </Container>
        </div>
    )
}

export default ItemDetail