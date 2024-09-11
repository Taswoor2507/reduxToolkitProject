import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalBill: 0,
  },

  reducers: {
    // Add item to the cart and update totalBill
    addItem(state, action) {
      const item = action.payload;
      const existingProduct = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }

      // Always recalculate totalBill after item is added
      state.totalBill = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Increase quantity and recalculate totalBill
    increaseQuantity(state, action) {
      const itemId = action.payload;
      const existingElement = state.items.find((item) => item.id === itemId);
      if (existingElement) {
        existingElement.quantity++;
      }

      // Recalculate totalBill
      state.totalBill = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Decrease quantity and recalculate totalBill
    decrementQuantity(state, action) {
      const itemId = action.payload;
      const existingElement = state.items.find((item) => item.id === itemId);
      if (existingElement) {
        if (existingElement.quantity > 1) {
          existingElement.quantity--;
        } else {
          // If quantity is 1, remove the item
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }

      // Recalculate totalBill
      state.totalBill = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Remove item and recalculate totalBill
    removeItem(state, action) {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);

      // Recalculate totalBill
      state.totalBill = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },

    // Clear cart and reset totalBill
    clearCart(state) {
      state.items = [];
      state.totalBill = 0;
    },
  },
});

export default CartSlice.reducer;
export const {
  addItem,
  increaseQuantity,
  decrementQuantity,
  removeItem,
  clearCart,
} = CartSlice.actions;
