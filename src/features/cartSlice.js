import { createSlice } from "@reduxjs/toolkit";

// const savedCart = localStorage.getItem("cart")
//   ? JSON.parse(localStorage.getItem("cart"))
//   :{
//     items: [],
//     tip:0
//    };
const saved = localStorage.getItem("cart");
const savedCart = saved ? JSON.parse(saved) : null;


// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     items: savedCart,
//   },
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: savedCart?.items ?? [],
    tip: savedCart?.tip ?? 0,
  },

  reducers: {
    addToCart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find((i) => i.id === item.id);

      if (exist) {
        exist.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      // localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("cart", JSON.stringify({
        items: state.items,
        tip: state.tip
      }));
      
    },

    increaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.qty += 1;
        // localStorage.setItem("cart", JSON.stringify(state.items));
        localStorage.setItem("cart", JSON.stringify({
          items: state.items,
          tip: state.tip
        }));
        
      }
    },

    decreaseQty: (state, action) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      } else {
        state.items = state.items.filter((i) => i.id !== action.payload);
      }
      // localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("cart", JSON.stringify({
        items: state.items,
        tip: state.tip
      }));
      
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter((i) => i.id !== action.payload);
      // localStorage.setItem("cart", JSON.stringify(state.items));
      localStorage.setItem("cart", JSON.stringify({
        items: state.items,
        tip: state.tip
      }));
      
    },

    clearCart: (state) => {
      state.items = [];
      state.tip = 0;
      localStorage.removeItem("cart");
    },

    setTip: (state, action) => {
      // state.tip = Number(action.payload);
      // localStorage.setItem("cart", JSON.stringify(state));
      state.tip = Number(action.payload);

      localStorage.setItem("cart", JSON.stringify({
          items: state.items,
          tip: state.tip
      }));
    }
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeFromCart,
  clearCart,
  setTip,
} = cartSlice.actions;

export default cartSlice.reducer;
