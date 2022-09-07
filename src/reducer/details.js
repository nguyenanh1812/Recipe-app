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
            return state
        case 'ADD_INGREDIENT':
            let newIngredient = state[0].ingredient
            state[0].ingredient = [...newIngredient, action.item]
            console.log(state)
            return state
        default:
            return state;
    }
}
export default details;