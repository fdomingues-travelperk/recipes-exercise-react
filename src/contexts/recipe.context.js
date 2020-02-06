import React, { createContext, useState } from "react";
import axios from "axios";
import shortid from 'shortid';

export const RecipeContext = createContext();

export function RecipesProvider(props) {
  const [loading, setLoading] = useState(true);
  const [recipes, setRecipes] = useState([]);

  async function loadRecipes(searchWord) {
    const search = searchWord || '';
    const response = await axios.get(`http://localhost:8000/recipes/?name=${search}`);
    console.log('fetched all ingredients filtered by', search);
    setRecipes(response.data);
    setLoading(false);
  }

  async function addRecipe(recipe) {
    const response = await axios.post('http://localhost:8000/recipes/', recipe);
    console.log('created new recipe');
    await loadRecipes();
    return response.data;
  }

  async function getRecipe(recipeId) {
    const response = await axios.get(`http://localhost:8000/recipes/${recipeId}/`);
    console.log('fetched recipe ' + recipeId);
    response.data.ingredients = response.data.ingredients.map(ing => ({...ing, id: shortid.generate()}));
    return response.data;
  }

  async function updateRecipe(recipeId, newRecipe) {
    const response = await axios.patch(`http://localhost:8000/recipes/${recipeId}/`, newRecipe);
    console.log('updated recipe ' + recipeId);
    return response.data;
  }

  return (
    <RecipeContext.Provider value={{recipes, loading, loadRecipes, addRecipe, getRecipe, updateRecipe}}>
      {props.children}
    </RecipeContext.Provider>
  )
}