import React, {createContext, useState} from 'react';
import { addItemToCart, removeItemFromCart } from './cart.utils';

export const CartContext = createContext({
    hidden: true,
    toggleHidden: () => {},
    cartItems: [],
    addItem: () => {},
    removeItem: () => {},
    clearItemFromCart: () => {},
    cartItemsCount: 0,
    cartTotal: 0
});

const CartProvider = ({ children }) => {
    const [hidden, setHidden] = useState(true);
    const [cartItems, setCartItems] = useState([]);
    //const [cartItemsCount, setCartItemsCount] = useState(0);

    const cartItemsCount = cartItems.reduce(
        (accumulatedQuantity, cartItem) =>
    (accumulatedQuantity + cartItem.quantity)
    ,0);
    

    const addItem = item => setCartItems(addItemToCart(cartItems, item));
    const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
    const clearItemFromCart = item => {setCartItems(
        cartItems.filter(
            cartItem =>
            cartItem.id !== item.id
        ));
    }
    const toggleHidden = () => setHidden(!hidden)

    const cartTotal = cartItems.reduce(
        (accumulatedQuantity,cartItem) =>
        (accumulatedQuantity + cartItem.quantity*cartItem.price)
    ,0)


    return (
        <CartContext.Provider
        value = {{
            hidden,
            toggleHidden,
            cartItems,
            addItem,
            removeItem,
            cartItemsCount,
            clearItemFromCart,
            cartTotal
        }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;