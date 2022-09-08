import { store } from "../app/store"
// console.log(store.getState().details[0].ingredient)
const details = (state = [], action) => {
    // if (action.type === 'SHOW_RECIPE') {
    //     state = [...action.item]
    //     return state
    // }
    // else
    //     if (action.type === 'ADD_INGREDIENT') {
    //         // console.log(state[0].ingredient)
    //         let newIngredient = state[0].ingredient
    //         state[0].ingredient = [...newIngredient, action.item]
    //         console.log(state)
    //         return state
    //     }

    // return state;
    switch (action.type) {
        case 'SHOW_RECIPE':
            state = [...action.item]
            console.log('show : ',state)
            return [...state]
        case 'ADD_INGREDIENT':
            let newIngredient = state[0].ingredient
            state[0].ingredient = [...newIngredient, action.item]
            console.log(state)
            return [...state]
        case 'EDIT_NAMEINGREDIENT':
            state[0].ingredient[action.item[1]].nameIngredient = action.item[0].nameIngredient
            console.log(state)
            return [...state]
        case 'EDIT_COUNTINGREDIENT':
            state[0].ingredient[action.item[1]].countIngredient = action.item[0].countIngredient
            console.log(state)
            return [...state]
        case 'DEL_EDIT_INGREDIENT':
            console.log(state)
            return [...state]
        default:
            return [...state];
    }
}
export default details;