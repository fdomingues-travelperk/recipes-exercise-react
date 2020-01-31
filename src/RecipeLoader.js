import React, { useEffect, useState } from 'react';
import Recipe from "./Recipe";

//FIXME: remove this
const recipes = [
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

let idCount = 4;

function returnWithDelay(value) {
  return new Promise(resolve => setTimeout(() => resolve(value), 3000));
}

function getRecipe(recipeId) {
  const recipe = recipes.filter(r => r.id === parseInt(recipeId))[0];
  return returnWithDelay(recipe)
}

function createNewRecipe(recipe) {
  recipe.id = idCount;
  recipes.push(recipe);
  return returnWithDelay(recipe);
}

function RecipeLoader(props) {
  const id = props.match.params.id;
  const [isLoading, setIsLoading] = useState(true);
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getRecipeById(recipeId) {
      setIsLoading(true);
      const recipe = await getRecipe(recipeId);
      setRecipe(recipe);
      setIsLoading(false)
    }

    getRecipeById(id);
  }, [id]);


  return (
    <div>
      {isLoading
        ? <p>Loading Recipe...</p>
        : <Recipe recipe={recipe}/>
      }
    </div>
  );
}

export default RecipeLoader;