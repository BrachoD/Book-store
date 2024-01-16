import React from 'react'
import useCounter from '../../hooks/useCounter'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './ItemCount.css'

const ItemCount = ({ initialValue, stock, onAdd }) => {
    const { count, increment, decrement } = useCounter(initialValue, stock)

    return (
        <div>
        {stock>0 ? 
        <div className='d-flex justify-content-center align-items-center'>

            <div className='buttom-margin'><Button className='buttom-color' onClick={() => onAdd(count)}>Add to cart</Button></div>


            <div className='counter-buttons buttom-margin'>

                <Button className='buttom-color' onClick={decrement}>−</Button>
                <div className='counter-border'><Card.Title>{count}</Card.Title></div>
                <Button className='buttom-color' onClick={increment}>+</Button>
            </div> 
        </div> : <h3>Not in stock☹</h3>}</div>

    )
}

export default ItemCount
