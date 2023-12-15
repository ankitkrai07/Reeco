import { createSlice } from "@reduxjs/toolkit";
import { orderedProducts } from "../Data/Data";
import status from "../Data/status";

const calculateTotalPrice = (products) => {
  return products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const orderSlice = createSlice({
  name: "order",
  initialState: {
    products: [...orderedProducts],
    totalPrice: calculateTotalPrice(orderedProducts),
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload);
      state.totalPrice = calculateTotalPrice(state.products);
    },
    updateProductStatus: (state, action) => {
      const { productId, status } = action.payload;

      const productIndex = state.products.findIndex((p) => p.id === productId);

      if (productIndex !== -1) {
        // Create a new array with the updated product
        state.products = [
          ...state.products.slice(0, productIndex),
          { ...state.products[productIndex], status: status },
          ...state.products.slice(productIndex + 1),
        ];
      }
    },
    approveAllProducts: (state) => {
      // Set the status of all products to "Approved"
      state.products.forEach((product) => {
        product.status = status.Approved;
      });
    },
    editProduct: (state, action) => {
      const { productId, price, quantity, newStatus } = action.payload;
      console.log(action.payload);
      const product = state.products.find((p) => p.id === productId);
      if (product) {
        product.status =
          product.price !== price && product.quantity !== quantity
            ? status.QuantityPriceUpdated
            : newStatus;
        // Update the price and quantity of the specified product
        product.price = price;
        product.quantity = quantity;
        state.totalPrice = calculateTotalPrice(state.products);
      }
    },
    resetOrder: (state) => {
      // Reset the state to its initial values
      state.products = [...orderedProducts];
      state.totalPrice = calculateTotalPrice(orderedProducts);
    },
  },
});

export const {
  addProduct,
  updateProductStatus,
  approveAllProducts,
  resetOrder,
  editProduct,
} = orderSlice.actions;

export default orderSlice.reducer;
