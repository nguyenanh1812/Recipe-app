import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id:0,name:'pizza',imgURL:'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',desc:'ngon lắm'
    },
    {
        id:0,name:'pizzhahaa',imgURL:'https://upload.wikimedia.org/wikipedia/commons/b/bb/Pizza_Vi%E1%BB%87t_Nam_%C4%91%E1%BA%BF_d%C3%A0y%2C_x%C3%BAc_x%C3%ADch_%28SNaT_2018%29_%287%29.jpg',desc:'ngon lắmahgjsdm'
    }
]

const foodSlice = createSlice({
    name:'foods',
    initialState,
    reducers:{
        addFood: (state, action) => {
            state.push(action.payload)
          },
    }


})

export const { addFood } = foodSlice.actions;
export default foodSlice.reducer;