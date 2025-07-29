import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(product => product._id === action.payload._id);
      const selectedQuantity = action.payload.quantity;
      
      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];
        existingProduct.quantity += selectedQuantity;
        state.total += existingProduct.price * selectedQuantity;
        state.quantity += selectedQuantity;
      } else {
        state.products.push({ ...action.payload, quantity: selectedQuantity });
        state.quantity += selectedQuantity;
        state.total += action.payload.price * selectedQuantity;
      }
    },
    
    
    removeProduct: (state, action) => {
      const existingProductIndex = state.products.findIndex(product => product._id === action.payload._id);
      if (existingProductIndex !== -1) {
        const existingProduct = state.products[existingProductIndex];
        existingProduct.quantity -= 1;
        state.total -= existingProduct.price;
        if (existingProduct.quantity <= 0) {
          state.products.splice(existingProductIndex, 1);
        }
        state.quantity -= 1;
      }
    },
    
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
