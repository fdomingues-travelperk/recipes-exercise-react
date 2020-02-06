import { Box, Button, TextField, Typography } from "@material-ui/core";
import React, { useContext, useState } from 'react';
import { useHistory } from "react-router-dom";
import { RecipeContext } from "./contexts/recipe.context";
import useInputState from "./hooks/useInputState";
import IngredientsForm from "./IngredientsForm";

function RecipeForm({edit, recipe = {}, afterEditCallback}) {
  const {addRecipe, updateRecipe} = useContext(RecipeContext);

  const [name, handleChangeName, resetName] = useInputState(recipe.name || '');
  const [description, handleChangeDesc, resetDesc] = useInputState(recipe.description || '');
  const [ingredients, setIngredients] = useState(recipe.ingredients || []);
  const history = useHistory();

  const handleSubmit = async () => {
    const updatedRecipe = {
      name: name,
      description: description,
      ingredients: ingredients
    };

    let newRecipe;
    if (edit) {
      newRecipe = await updateRecipe(recipe.id, updatedRecipe);
      afterEditCallback()
    } else {
      newRecipe = await addRecipe(updatedRecipe);
    }

    resetName();
    resetDesc();
    //redirect to the recipe page
    history.replace(`/recipe/${newRecipe.id}`);
  };

  return (
    <Box p={2}>
      {!edit ? <Typography variant="h3">Create a new Recipe</Typography> : ''}
      <Box>
        <TextField
          id="name"
          label="Recipe Name"
          placeholder="Name"
          margin="normal"
          value={name}
          onChange={handleChangeName}
          autoFocus
          autoComplete='off'
        />
      </Box>
      <Box mt={1}>
        <TextField
          id="standard-multiline-static"
          label="Description"
          value={description}
          onChange={handleChangeDesc}
          autoComplete='off'
          multiline
          fullWidth
        />
      </Box>
      <IngredientsForm ingredients={ingredients} setIngredients={setIngredients}/>
      <Box mt={2}>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          {edit ? 'Update' : 'Create'} recipe
        </Button>
      </Box>
    </Box>
  );
}

export default RecipeForm;