import { store } from "../app/store"

const init = store.getState().details[0].ingredient
console.log(init)
const addIngredient = (state = init, action) => {
    if (action.type === 'ADD_INGREDIENT') {
        return [...state, action.item]
    }
    return [...state]
}

export default addIngredient