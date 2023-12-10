import React from 'react'
import useCounter from '../../hooks/useCounter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemCount = ({ initialValue, stock, onAdd }) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)

    return (
        <div className='d-flex justify-content-center align-items-center'>
            <div><Button className='buttom-color' onClick={() => onAdd(count)}>Add to cart</Button></div>

            <div>
                <Button className='buttom-color' onClick={increment}>+</Button>
                <Card.Title>{count}</Card.Title>
                <Button className='buttom-color' onClick={decrement}>-</Button>
            </div>
        </div>
    )
}

export default ItemCount