import { createSlice } from "@reduxjs/toolkit";

const HomeSlice = createSlice({
  name: "home",
  initialState: {
    orders: [],
    items: [
      {
        id: 1,
        title: "Стул серый",
        img: "1.webp",
        desc: "lorem ipusm dolor sit smet,, condtudor adipstisnd",
        categories: "chairs",
        price: "49.99",
      },
      {
        id: 2,
        title: "Стул серый",
        img: "2.webp",
        desc: "lorem ipusm dolor sit smet,, condtudor adipstisnd",
        categories: "tables",
        price: "149.00",
      },
      {
        id: 3,
        title: "Стол",
        img: "3.webp",
        desc: "lorem ipusm dolor sit smet,, condtudor adipstisnd",
        categories: "chairs",
        price: "49.99",
      },
      {
        id: 4,
        title: "Стул серый",
        img: "4.webp",
        desc: "lorem ipusm dolor sit smet,, condtudor adipstisnd",
        categories: "chairs",
        price: "49.99",
      },
      {
        id: 5,
        title: "Стул серый",
        img: "5.webp",
        desc: "lorem ipusm dolor sit smet,, condtudor adipstisnd",
        categories: "chairs",
        price: "49.99",
      },
      {
        id: 6,
        title: "Стул серый",
        img: "6.webp",
        desc: "lorem ipusm dolor sit smet,, condtudor adipstisnd",
        categories: "chairs",
        price: "49.99",
      },
    ],
  },
  reducers: {
    addToOrder(state, action) {
      let isInArray = false;
      state.orders.forEach((el) => {
        if (el.id === action.payload.props.id) {
          isInArray = true;
        }
      });
      if (!isInArray) state.orders.push(action.payload.props);
    },
    deleteFromOrder(state, action) {
      state.orders = state.orders.filter(
        (item) => item.id !== action.payload.props.id
      );
    },
  },
});

export const { addToOrder, deleteFromOrder } = HomeSlice.actions;
export default HomeSlice.reducer;
