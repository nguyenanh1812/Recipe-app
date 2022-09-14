import { createSlice } from '@reduxjs/toolkit'

// Dùng để lưu lại shoppingList
// initialState là giá trị khởi tạo em làm mẫu, khi merge vào project nhóm mình thì sẽ khởi tạo lại giá trị khác 
export const shoppingListSlice = createSlice({
    name: 'shoppingList',
    initialState: [{
        nameIngredient: 'Phở',
        countIngredient: '10'
    },
    {
        nameIngredient: 'Steak',
        countIngredient: '3'
    }
    ],
    reducers: {
        // Đây là những cái action để mình dispatch khi nhấn các button tương ứng
        ADD_LIST(state, action) {
            state.push(action.payload)
        },
        DELETE_LIST(state, action) {
            state.splice(action.payload, 1)
        },
        UPDATE_LIST(state, action){
            state[action.payload.index].nameIngredient = action.payload.nameIngredient
            state[action.payload.index].countIngredient = action.payload.countIngredient
            return state
        }
    }
})

export const { actions } = shoppingListSlice
export const { ADD_LIST, DELETE_LIST, UPDATE_LIST } = actions