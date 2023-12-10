import React, { useState, useEffect } from 'react'
import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import { getProductByCategory, getProductByAuthor, getProducts } from '../../data/asyncMock'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({ title }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()
    const { authorId } = useParams()

    useEffect(() => {
        if (categoryId) {
            getProductByCategory(categoryId)
                .then((prod) => setData(prod))
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false))
        }
        else if (authorId){
            getProductByAuthor(authorId)
                .then((prod) => setData(prod))
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false))

        }
        else {
            getProducts()
                .then((prod) => {
                    setData(prod)
                })
                .catch((err) => console.log(err))
                .finally(() => setIsLoading(false))

        }
    }, [categoryId, authorId])

    return (
        <div>
            <h1>{title}</h1>
            {isLoading ? <Spinner animation="border" variant="danger" /> :
            <ItemList data={data} />
            }
        </div >
    )
}

export default ItemListContainer