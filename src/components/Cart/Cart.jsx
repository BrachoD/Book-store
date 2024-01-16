import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'
import { BsTrash3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';



const Cart = () => {
    const { cart, getTotal, removeItem, clearCart, incrementItem, decrementItem } = useContext(CartContext)

    if (cart.length === 0) {
        return (
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <h1 className='mt-5'>
                    The cart is empty! Keep shopping!
                </h1>
                <Link className='mt-5' to='/'><button className="btn buttom-color btn-block btn-lg ml-2 pay-button">Keep shopping</button></Link>
            </div>
        )
    }
    else {
        return (
            <div>

                {cart.map((prod) => (
                    <div className="container mt-1 mb-1" key={prod.id}>
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-8">
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                    <div className="image-container mr-1"><img className="rounded" src={prod.img} width="70" /></div>
                                    <div className="name-container d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{prod.name}</span>
                                        <div className="d-flex flex-column product-desc">
                                            <div className="size mr-1"><span className="text-grey">Category:</span><span className="font-weight-bold">{prod.category}</span></div>
                                            <div className="color"><span className="text-grey">Author:</span><span className="font-weight-bold">{prod.author}</span></div>
                                        </div>
                                    </div>
                                    <div className="counter-container d-flex flex-row align-items-center justify-content-between qty">
                                        <Button className='buttom-color' onClick={() => decrementItem(prod.id)}>−</Button>
                                        <div className='counter-border'><h5>{prod.quantity}</h5></div>
                                        <Button className='buttom-color' onClick={() => incrementItem(prod.id, prod.stock)}>+</Button>
                                    </div>
                                    <div className='cost-container'>
                                        <h6>U/C</h6>
                                        <h5 className="text-black">${prod.price}</h5>
                                    </div>
                                    <div className='cost-container'>
                                        <h6>EXT.</h6>
                                        <h5 className="text-black">${prod.price * prod.quantity}</h5>
                                    </div>
                                    <div className="d-flex align-items-center trash-container">
                                        <div className='trash' onClick={() => removeItem(prod.id)}><BsTrash3 size={24} /></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
                <div className="cart-total-container container mt-1 mb-1" >
                    <div className="d-flex justify-content-center row">
                        <div className="col-md-8">
                            <div className="d-flex flex-column align-items-center justify-content-around mt-3 p-2 bg-white rounded">
                                <h5>Order confirmation</h5>
                                <div className="order-summary d-flex flex-row align-items-center justify-content-center">
                                    <div className='d-flex order-summary-cost flex-column align-items-start justify-content-start'>
                                        <div className='cost-separator'>
                                            <span className="font-weight-bold">Subtotal:</span>
                                            <div></div>
                                            <span className="font-weight-bold">${getTotal().toFixed(2)}</span>
                                        </div>
                                        <div className='cost-separator'>
                                            <span className="font-weight-bold">Tax:</span>
                                            <div></div>
                                            <span className="font-weight-bold">${(getTotal() * 0.07).toFixed(2)}</span>
                                        </div>
                                        <div className='cost-separator mt-5'>
                                            <span className="font-weight-bold">Total:</span>
                                            <div></div>
                                            <span className="font-weight-bold">${(getTotal() * 1.07).toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className='d-flex order-summary-buttons flex-column align-items-center justify-content-around p-2'>
                                        <Link to={'/checkout'}><button className="btn buttom-color btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></Link>
                                        <button onClick={() => clearCart()} className="btn buttom-color btn-block btn-lg ml-2 pay-button" type="button">Clear cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Cart