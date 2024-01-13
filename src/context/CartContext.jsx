import React, { createContext, useState } from "react"

const Context = createContext()

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addItem = (productToAdd, quantity) => {
        const newObj = { ...productToAdd, quantity }

        if (isInCart(newObj.id)) {
            const updatedCart = cart.map((el) => {
                if (el.id === newObj.id) {
                    el.quantity += newObj.quantity
                }
                return el
            })
            setCart(updatedCart)
        }
        else {
            setCart([...cart, newObj])
        }
    }

    const isInCart = (id) => {
        return cart.some((el) => el.id === id)
    }

    const getTotal = () => {
        const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
        return total
    }

    const removeItem = (id) => {
        const deleteItem = cart.filter((el) => el.id !== id)
        setCart([...deleteItem])
    }

    const clearCart = () => {
        setCart([])
    }

    const decrementItem = (productId) => {

        const updatedCart = cart.map((el) => {
            if (el.id === productId) {
                const newQuantity = Math.max(el.quantity - 1, 1)
                return {...el, quantity: newQuantity}
            }
            return el
        })
        setCart(updatedCart)
    }

    const incrementItem = (productId, stock) => {

        const updatedCart = cart.map((el) => {
            if (el.id === productId) {
                const newQuantity = Math.min(el.quantity + 1, stock)
                return {...el, quantity: newQuantity}
            }
            return el
        })
        setCart(updatedCart)
    }

    const getQuantity = () => {
        let count = 0
        cart.forEach((el) => {
            count = count + el.quantity
        })
        return count
    }

    return (
        <Context.Provider value={{ cart, setCart, addItem, getTotal, removeItem, clearCart, getQuantity, decrementItem, incrementItem }}>{children}</Context.Provider>
    )
}

export default Context