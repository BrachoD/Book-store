import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from '../LoaderComponent/LoaderComponent';
import { collection, where, query, getDocs } from 'firebase/firestore';
import { db } from '../../main'


const ItemListContainer = ({ title }) => {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { categoryId } = useParams()
    const { authorId } = useParams()

    useEffect(() => {


        const getData = async() => {

            const queryRef = categoryId ? query(collection(db, 'products'), where('category', '==', categoryId)) : 
            authorId ? query(collection(db, 'products'), where('author', '==', authorId)) : 
            collection(db, 'products')

            const response = await getDocs(queryRef)

            const products = response.docs.map((doc) => {
                const newProduct = {
                    ...doc.data(),
                    id: doc.id
                }
                return newProduct
            })
            setTimeout(() => {
                setData(products)
                setIsLoading(false)
            },1000)
        }
        getData()

    }, [categoryId, authorId])

    return (
        <div className='item-list-container'>
            <h1>{title}</h1>
            <LoaderComponent loading={isLoading}/>
            {!isLoading && <ItemList data={data} />}
        </div >
    )
}

export default ItemListContainer