import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='CartContainer'>
        <BsFillCartFill size={24} color='white'/>
        <p>16 Items</p>
    </div>
  )
}

export default CartWidget