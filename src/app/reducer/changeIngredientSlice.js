import { createSlice } from "@reduxjs/toolkit";


// lúc bấm vào ingredient lấy được name và count nhưng chưa lấy được index của nó trong shoppingList 
// nên tạo ra cái này để lấy ingredient và truyền vào index
// dữ liệu của nó sau khi truyền vào sẽ có kiểu 
// {
//     nameIngredient : '...',
//     countIngredient : '...',
//     index : '...'
// }
export const changeIngredinetSlice = createSlice({
    name: 'changeIngredient',
    initialState: {},
    reducers: {
        CHANGE_INGREDIENT(state, action) {
            return action.payload
        },
        HANDLE_NAME(state, action) {
            state.nameIngredient = action.payload
            return state
        },
        HANDLE_COUNT(state, action) {
             state.countIngredient = action.payload
             return state
        }
    }
})

export const { actions } = changeIngredinetSlice
export const { CHANGE_INGREDIENT, HANDLE_NAME, HANDLE_COUNT } = actions