import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {

        getProductById(itemId)
            .then((prod) => {
                setProduct(prod)
            })
            .catch((err) => console.log(err))
            .finally(() => setIsLoading(false))
    }, [itemId])

    return (
        <div>
            {isLoading ? <Spinner animation="border" variant="danger" /> :
                <ItemDetail {...product} />
            }
        </div>
    )
}

export default ItemDetailContainer