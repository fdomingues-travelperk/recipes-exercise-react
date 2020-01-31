import React, { useState } from 'react';
import IngredientList from "./IngredientList";

function Recipe({recipe}) {
  const [] = useState(false);

  return (
    <div>
      <h3>{recipe.name}</h3>
      <button>Edit name</button>
      <p>{recipe.description}</p>
      <button>Edit Description</button>
      <IngredientList ingredients={recipe.ingredients}/>
    </div>
  );
}

export default Recipe;
