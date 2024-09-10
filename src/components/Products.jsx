import React, { useCallback } from 'react'
import ProductsData from '../ProductsData'
import { useDispatch } from 'react-redux'
import { addItem } from '../redux/CartSlice';
const Products = () => {
    const dispatch = useDispatch();
  return (
  <div style={{display:'flex' , gap:"20px" , flexWrap:"wrap"}}>
  {
          ProductsData.map((product)=>{
            return (
                <div style={{width:"250px", border:"2px solid red"}} key={product.id} >
                    <div>ProductName : {product.name}</div>
                    <button onClick={()=>{dispatch(addItem(product))}}>Add to Cart</button>
                </div>
            )
       })
    }
  </div>
  )
}

export default Products