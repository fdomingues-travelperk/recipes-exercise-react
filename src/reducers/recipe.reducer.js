const recipeReducer = (recipes, action) => {
  switch (action.type) {
    case 'ADD':
      return [...recipes, {
        name: action.name,
        description: action.description,
        ingredients: action.ingredients
      }];
    case 'EDIT':
      return recipes.map(recipe => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            name: action.name,
            description: action.description,
            ingredients: action.ingredients
          }
        }
        return recipe
      });
    default:
      return recipes
  }
};

export default recipeReducer;