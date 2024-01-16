import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../data/asyncMock'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../main'
import './ItemDetailContainer.css'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const { itemId } = useParams()

    useEffect(() => {

        const getProduct = async() => {
            const queryRef = doc(db, 'products', itemId)

            const response = await getDoc(queryRef)

            const newProduct = {
                ...response.data(),
                id: response.id
            }

            setTimeout(()=> {
                setProduct(newProduct)
                setIsLoading(false)

            },500)
        }
        getProduct()
    }, [itemId])

    return (
        <div className='item-detail-container'>
            
            <LoaderComponent loading={isLoading}/>
            {!isLoading && <ItemDetail {...product} />}
        </div>
    )
}

export default ItemDetailContainer