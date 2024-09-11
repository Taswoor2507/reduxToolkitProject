import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrementQuantity, increaseQuantity, removeItem } from '../redux/CartSlice'

const Cart = () => {
    const cartItemsLength= useSelector((state)=>{ return state.cart.items.length})
    const selectedItems= useSelector((state)=>{ return state.cart.items})
    const dispatch = useDispatch();

  return (
    <>
    {
        cartItemsLength > 0   ? 
        selectedItems.map((item)=>{
            return (
                <div key={item.id}>
                    {item.name} : {item.quantity}
                    <button  onClick={()=>{dispatch(increaseQuantity(item.id))}}>+</button>
                    <button onClick={()=>{dispatch(decrementQuantity(item.id))}}>-</button>
                   <button onClick={()=>{dispatch(removeItem(item.id))}}>X</button>
                </div>
            )
        })
        
        
        :<h1>Add items first</h1>

    }
    </>
  )
}

export default Cart