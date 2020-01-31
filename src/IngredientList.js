import React from 'react';
import Ingredient from "./Ingredient";

function IngredientList({ingredients}) {
  return (
    <div>
      {ingredients.map(ing => <Ingredient key={ing.id} {...ing}/>)}
    </div>
  );
}

export default IngredientList;