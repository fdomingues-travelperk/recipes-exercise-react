import React, { createContext } from "react";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";
import recipeReducer from "../reducers/recipe.reducer";

export const RecipeContext = createContext();
export const RecipeDispatchContext = createContext();

const initialRecipes = [
  {
    "id": 1,
    "name": "Pizza",
    "description": "Put it in the oven",
    "ingredients": [
      {id: 1, "name": "dough"},
      {id: 2, "name": "cheese"},
      {id: 3, "name": "tomato"}
    ]
  },
  {
    "id": 2,
    "name": "Pizza v2",
    "description": "Put it in the oven v2",
    "ingredients": [
      {id: 4, "name": "dough"},
      {id: 5, "name": "cheese"},
      {id: 6, "name": "tomato"},
      {id: 7, "name": "potatoes"}
    ]
  },
  {
    "id": 3,
    "name": "Pizza v3",
    "description": "Put it in the oven v3",
    "ingredients": [
      {id: 8, "name": "dough"},
      {id: 9, "name": "cheese"},
      {id: 10, "name": "tomato"}
    ]
  },
];


export function RecipesProvider(props) {
  const [recipes, recipesDispatch] = useLocalStorageReducer('recipes', initialRecipes, recipeReducer);

  return (
    <RecipeContext.Provider value={recipes}>
      <RecipeDispatchContext.Provider value={recipesDispatch}>
        {props.children}
      </RecipeDispatchContext.Provider>
    </RecipeContext.Provider>
  )
}