import React, { useContext } from 'react';
import useInputState from "./hooks/useInputState";
import { RecipeDispatchContext } from "./contexts/recipe.context";

function CreateRecipeForm(props) {
  const [name, handleChangeName, resetName] = useInputState('');
  const [description, handleChangeDesc, resetDesc] = useInputState('');
  const [ingredients, handleChangeIng, resetIng] = useInputState('');

  const dispatch = useContext(RecipeDispatchContext);

  return (
    <form onSubmit={e => {
      e.preventDefault();
      dispatch({
        type: 'ADD',
        name: name,
        description: description,
        ingredients: ingredients.split(',').map(i => i.trim())
      });
      resetName();
      resetDesc();
      resetIng();
    }}>
      <h3>Create a new Recipe</h3>
      <div>
        <input
          placeholder='Name'
          value={name}
          onChange={handleChangeName}
        />
      </div>
      <div>
        <textarea
          name="description"
          rows="4"
          cols="60"
          value={description}
          onChange={handleChangeDesc}
          placeholder="Description"
        />
      </div>
      <div>
        <input
          placeholder='Ingredients'
          value={ingredients}
          onChange={handleChangeIng}
        />
      </div>
      <button>Create recipe</button>
    </form>
  );
}

export default CreateRecipeForm;