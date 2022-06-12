// here we define all the application level code and define actions to make the changes to the states
import React, {useReducer} from 'react'
import { propTypes } from 'react-currency-format'
import {CartContext} from './cart-context'

export const initialState= {
    items:[],
    totalAmount: 0
}


const cartReducer= (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;
        if (existingCartItem) {
            let updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingCartItem = state.items[existingCartItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter((item) => {
                return item.id !== action.id;
            })
        } else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'CLEAR') {
        return initialState;
    }
    return initialState;
}

const CartProvider = (props) =>{
    const [cartState, dispatchCartAction] = useReducer(cartReducer, initialState);
    const addItemHandler = (item)=>{
        dispatchCartAction({type: 'ADD', item: item});
    }
    const removeItemHandler = (id)=>{
        dispatchCartAction({type: "REMOVE", id: id});
    }
    const clearCartHandler = ()=>{
        dispatchCartAction({type: "CLEAR"});
    }
    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        clearItem: clearCartHandler
    }
    return <cartContext.Provider value={cartContext}>
        {props.children}
    </cartContext.Provider>
}

export default CartProvider;
