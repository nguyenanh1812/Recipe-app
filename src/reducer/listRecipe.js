const listRecipe = (state = JSON.parse(localStorage.getItem('listRecipe'))||[], action) => {
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
            state.splice(action.item, 1)
            console.log(state)
            localStorage.setItem('listRecipe',JSON.stringify(state))
            return [...state]
        case 'SAVE_EDIT_RECIPE':
            console.log(state)
            return [...state]
        default:
            return [...state];
    }
}

export default listRecipe;