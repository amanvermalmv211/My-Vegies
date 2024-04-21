import React, { useState } from 'react';
import CartContext from './cartContext';

const CartState = (props) => {

    const [cartOrder, setCartOrder] = useState({});

    const saveCartOrder = (newCart) => {
        localStorage.setItem("mvcart", JSON.stringify(newCart));
    }

    //Set user order to cart
    const toggleCartOrder = async (details) => {

        let newCart = cartOrder;
        if (!(details._id in cartOrder)) {
            newCart[details._id] = details;
        }
        else if (details._id in cartOrder) {
            newCart[details._id].quantity = details.quantity;
        }

        if (details.quantity === 0) {
            delete newCart[details._id];
        }

        setCartOrder(newCart);
        saveCartOrder(newCart);
        props.setCart(Object.keys(cartOrder).length);
    }

    //Clear Cart
    const clearCart = async () => {
        setCartOrder({});
        saveCartOrder({});
        props.setCart(0);
    }

    let initialState = [];
    const [items, setItems] = useState(initialState);

    const toggleItems = (details) => {
        let flag = false;
        for(var i=0; i<items.length; i++){
            if(items[i].name === details.name){
                flag = true;
                break;
            }
        }

        if(!flag){
            setItems(items.concat(details));
        }
    }

    const deleteItems = (name) => {
        const newItems = items.filter((item) => { return item.name !== name });
        setItems(newItems);
    }

    return (
        <CartContext.Provider value={{ cartOrder, setCartOrder, toggleCartOrder, clearCart, items, setItems, toggleItems, deleteItems }}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartState;