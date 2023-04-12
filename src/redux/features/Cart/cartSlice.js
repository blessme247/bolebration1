import { createSlice } from "@reduxjs/toolkit"
import { toast } from "react-toastify";
const initialState = [];

export const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers: {
        addFood:(state, action) => {
// check if food is present in the cart, we use the find method.
        const foodInCart = state.find((item) => item.id === action.payload.id)

// if food is not found, add the item in cart with quantity 1.
        if (!foodInCart){
     state.push({...action.payload })
        console.log("button clicked")
        toast.success(
            "added to cart successfully",
            {
              position: "top-center",
            }
          );
        }
    },

    removeFood:(state, action) => {
// remember the state carries our items as they are being updated.
    state.filter((item) => item.id !== action.payload.id)
    }

    }
});
export const { addFood,  removeFood } = cartSlice.actions

 export default cartSlice.reducer;
