// export const hiddenNewRecipe = (state = 'hidden', action) => {
//     if(action.type==='show'){
//         return 'show'
//     }
//     return state
// }

export const showImg = (state = false, action) => {
    if (action.type === true) {
        return true
    }
    return false
}