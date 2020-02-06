import React, { useContext } from 'react';
import { RecipeContext } from "./contexts/recipe.context";
import TextField from "@material-ui/core/TextField";

function SearchForm() {
  const {loadRecipes} = useContext(RecipeContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    loadRecipes(event.target.value)
  };

  return (
    <TextField id="standard-basic" label="Filter recipes" onChange={handleSubmit} fullWidth/>
  );
}

export default SearchForm;