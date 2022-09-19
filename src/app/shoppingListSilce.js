import { createSlice } from "@reduxjs/toolkit";

export const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: {},
    reducers: {
        editShoppingList(state, action) {
            localStorage.setItem('shoppingList', JSON.stringify({ ...action.payload }))
            return { ...action.payload }
        }
    }
})

export const { actions } = shoppingListSlice
export const { editShoppingList } = actions
