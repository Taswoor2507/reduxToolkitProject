import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../redux/CartSlice'

const Header = () => {
    const cartItemsLength= useSelector((state)=> state.cart.items.length )
    const totalBill= useSelector((state)=> state.cart.totalBill)
    const dispatch = useDispatch();
  return (
    <div>
      <button onClick={()=>{dispatch(clearCart())}}>Clear Cart</button>
        <div>
            <h1>Logo</h1>
        </div>
        <div>
            cart : {cartItemsLength}

        </div>
        <div>Totalbill: {totalBill}</div>
    </div>
  )
}

export default Header