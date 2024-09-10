import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const cartItemsLength= useSelector((state)=> state.cart.items.length )
    const totalBill= useSelector((state)=> state.cart.totalBill)

  return (
    <div>
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