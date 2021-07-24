import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  item:null,
  array:[],
  start:false
}
const sliceName="item"
const ItemSlice = createSlice({
  name: sliceName,
  initialState,
  reducers: {
    setItem:(state,action)=>{
      state.item=action.payload;
      state.array.push(action.payload),
      state.start=true;
    },
    setTrue:(state)=>{
      state.start=true;
    },
    resetItem:(state)=>{
      state.item=null
    }
  }
});


export const {setItem,resetItem,setTrue } = ItemSlice.actions
export const selectItem=state=>state.item.item
export const selectArray=state=>state.item.array
export const selectStart=state=>state.item.start

export default ItemSlice.reducer