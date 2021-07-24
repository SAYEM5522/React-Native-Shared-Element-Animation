import { configureStore } from '@reduxjs/toolkit';
import itemReducer from "../features/ItemSlice"
export default configureStore({
  reducer: {
    item:itemReducer
  },
});