import { createSlice } from "@reduxjs/toolkit";

export const listIngredientSlice = createSlice({
    name: 'ingredient',
    initialState: [],
    reducers: {
        addIngredient(state, action) {
            state.push({
                nameIngredient: '',
                countIngredient: ''
            })
        },
        removeIngredient(state, action) {
            state.splice(action.payload, 1)
        },
        saveNameIngredient(state, action) {
            if (state !== []) {
                state[action.payload.index].nameIngredient = action.payload.payload
                return state
            }
            else return state

        },
        saveCountIngredient(state, action) {
            if (state !== []) {
                state[action.payload.index].countIngredient = action.payload.payload
                return state
            }
            else return state
        },
        clearIngredient(state, action) {
            return []
        }
    }
})

export const { reducer, actions } = listIngredientSlice
export const { addIngredient, removeIngredient, saveNameIngredient, saveCountIngredient, clearIngredient } = actions