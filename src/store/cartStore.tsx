import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalValue: 0,
  },
  reducers: {
    addItem(state, action: PayloadAction<Product>) {
      const items: any = state.items;
      items.push(action.payload);
      state.items = items;
      state.totalValue = items.reduce(
        (prev: any, curr: any) => prev + curr.price,
        0
      );
    },
  },
});
export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
