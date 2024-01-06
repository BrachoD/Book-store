import React from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css'
import './CartWidget.css'
import CartContext from '../../context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {
  const { getQuantity } = useContext(CartContext)
  return (
    <div className='CartContainer'>
        <BsFillCartFill size={24} color='white'/>
        <p>{getQuantity()}</p>
    </div>
  )
}

export default CartWidget