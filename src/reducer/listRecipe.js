const listRecipe = (state = [], action) => {
//     if (action.type === 'ADD_RECIPE') {
//         return [...state, action.item]
//     }
//     return state;
// }
// console.log(listRecipe)
// if(action.type==='show'){
//     return 'show'
// }
// return state
// }
switch (action.type) {
    case 'ADD_RECIPE':
        return [...state, action.item]
    case 'DEL_RECIPE':
        console.log(state)
        state.splice(0,1)
        console.log(state)
        return state
    default:
        return state;
}
}

export default listRecipe;