import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalBill : 0
    } , 

    reducers:{
      addItem(state ,action){
        const item =action.payload
        const existingProduct  =  state.items.find(item => item.id === action.payload.id);
        if(existingProduct){
            item.quatity++
        }else{
              state.items.push({...item , quatity:1})
        }
       state.totalBill +=item.price
      } , 

      increaseQuantity(state , action){
         const itemId =  action.payload;
         const existingELement =  state.items.find((item) => item.id === itemId);
         if(existingELement){
             existingELement.quatity++
             state.totalBill += existingELement.price
         }
      } ,

      decrementQuantity(state, action){
         const itemId =  action.payload;
         const existingELement =  state.items.find((item) => item.id === itemId);
         if(existingELement){
             existingELement.quatity--
             if(existingELement.quatity === 0){
                 state.items = state.items.filter((item) => item.id!== itemId)
             }
             state.totalBill -= existingELement.price
         }
      } , 

      totalBill(state){
        if(state.cart.items.length > 0 ){
          const bill = state.cart.items.reduce((total , product)=> total + product.price )
          state.totalBill = bill
        }
       
      }
    }


}) 

export default CartSlice.reducer;
export const {addItem, increaseQuantity , decrementQuantity , totalBill} =  CartSlice.actions