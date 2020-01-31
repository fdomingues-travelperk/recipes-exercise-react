import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { RecipeContext } from "./contexts/recipe.context";

function RecipeList(props) {
  const recipes = useContext(RecipeContext);

  return (
    <div>
      {recipes.map(recipe => (
        <div>
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
        </div>
      ))}
    </div>
  );
}

export default RecipeList;