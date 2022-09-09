const initState = {
  recipeList: [
    {
      id: 1,
      name: "Hamburger1",
      description: "Hamburger description1",
      imgURL:
        "https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg",
      ingredients: [
        {
          name: "bread",
          amount: 1,
        },
        {
          name: "meat",
          amount: 1,
        },
        {
          name: "egg",
          amount: 1,
        },
      ],
    },
    {
      id: 2,
      name: "beefsteak",
      description: "beefsteak description2",
      imgURL:
        "https://www.thatlangon.com/wp-content/uploads/2021/01/hamburger-thatlangon-500x500.jpg",
      ingredients: [
        {
          name: "beef",
          amount: 2,
        },
        {
          name: "celery",
          amount: 5,
        },
      ],
    },
    {
      id: 3,
      name: "fried chicken",
      description: "gà chiên ròn nhó",
      imgURL:
        "https://bizweb.dktcdn.net/100/420/256/files/cach-chien-ga-kfc-5.jpg?v=1623231923691",
      ingredients: [
        {
          name: "chicken",
          amount: 1,
        },
      ],
    },
  ],
  shoppingList: [
    {
      id: 1,
      name: "Bread",
      quantity: 80,
    },
    {
      id: 2,
      name: "chicken",
      quantity: 100,
    },
    {
      id: 3,
      name: "Apples",
      quantity: 20,
    },
    {
      id: 4,
      name: "egg",
      quantity: 55,
    },
    {
      id: 5,
      name: "meat",
      quantity: 22,
    },
  ],
};
const rootReducer = (state = initState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "recipeList/addRecipe":
      return {
        ...state,
        recipeList: [...state.recipeList, action.payload],
      };

    case "recipeList/updateRecipe":
      const recipeList = [...state.recipeList];
      const index = recipeList.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      recipeList[index] = action.payload;
      return { ...state, recipeList: recipeList };

    case "recipeList/removeRecipe":
      const recipeList1 = [...state.recipeList];
      const removeRecipe = recipeList.find(
        (recipe) => recipe.id === action.payload.id
      );
      recipeList1.slice(removeRecipe, 1);
      return { ...state, recipeList: recipeList1 };

    case "shoppingList/addIngredient":
      return {
        ...state,
        shoppingList: [...state.shoppingList, action.payload],
      };

    case "shoppingList/updateRecipe":
      const shoppingList = [...state.recipeList];
      const index2 = shoppingList.findIndex(
        (recipe) => recipe.id === action.payload.id
      );
      recipeList[index2] = action.payload;
      return { ...state, shoppingList: shoppingList };

    case "shoppingList/removeIngredient":
      const shoppingList1 = [...state.recipeList];
      const removeItem = shoppingList1.find(
        (recipe) => recipe.id === action.payload.id
      );
      shoppingList1.slice(removeItem, 1);
      return { ...state, shoppingList: shoppingList1 };

    default:
      return state;
  }
};

export default rootReducer;
