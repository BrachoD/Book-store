import React, { useContext } from 'react'
import CartContext from '../../context/CartContext'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Cart.css'
import { BsTrash3 } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, getTotal, removeItem, clearCart } = useContext(CartContext)
    console.log('Cart: ', cart)

    if(cart.length === 0){
        return(
            <div>
                <h1>
                    The cart is empty! Keep shopping!
                </h1>
                <Link to='/'><button>Keep shopping</button></Link>
            </div>
        )
    }
    else{
        return (
            <div>
    
                {cart.map((prod) => (
                    <div className="container mt-5 mb-5" key={prod.id}>
                        <div className="d-flex justify-content-center row">
                            <div className="col-md-8">
                                <div className="d-flex flex-row justify-content-between align-items-center p-2 bg-white mt-4 px-3 rounded">
                                    <div className="mr-1"><img className="rounded" src={prod.img} width="70" /></div>
                                    <div className="d-flex flex-column align-items-center product-details"><span className="font-weight-bold">{prod.name}</span>
                                        <div className="d-flex flex-row product-desc">
                                            <div className="size mr-1"><span className="text-grey">Size:</span><span className="font-weight-bold">{prod.category}</span></div>
                                            <div className="color"><span className="text-grey">Color:</span><span className="font-weight-bold">{prod.author}</span></div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-row align-items-center qty"><i className="fa fa-minus text-danger"></i>
                                        <h5 className="text-grey mt-1 mr-1 ml-1">{prod.quantity}</h5><i className="fa fa-plus text-success"></i></div>
                                    <div>
                                        <h5 className="text-grey">${prod.price}</h5>
                                    </div>
                                    <div>
                                        <h5 className="text-grey">${prod.price * prod.quantity}</h5>
                                    </div>
                                    <div className="d-flex align-items-center">
    
                                        <button onClick={() => removeItem(prod.id)}><BsTrash3 size={24} color='red' /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button onClick={() => clearCart()} className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Clear cart</button></div>
                <div className="d-flex flex-row align-items-center mt-3 p-2 bg-white rounded"><button className="btn btn-warning btn-block btn-lg ml-2 pay-button" type="button">Proceed to Pay</button></div>
    
                <h5>{getTotal()}</h5>
            </div>
        )
    }
    
}

export default Cart