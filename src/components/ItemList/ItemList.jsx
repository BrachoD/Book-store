import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({ data }) => {
    
  return (
    <div className='d-flex flex-wrap justify-content-center align-items-center container'>
        {data.map((products) => (
            <div key={products.id}>
                <Item products = {products}/>
            </div>
            ))}
    </div>
  )
}

export default ItemList