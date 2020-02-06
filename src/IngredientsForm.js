import { Box, TextField } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import React from 'react';
import shortid from 'shortid';

function IngredientsForm({ingredients, setIngredients}) {

  const handleChange = function (event, ingredients) {
    setIngredients(ingredients.map(ing => {
      if (typeof ing === 'string') {
        return {id: shortid.generate(), name: ing}
      }
      return ing
    }));
  };

  return (
    <Box mt={2}>
      <Autocomplete
        multiple
        freeSolo
        getOptionLabel={ing => ing.name}
        value={ingredients}
        onChange={handleChange}
        renderInput={params => (
          <TextField
            {...params}
            label="Ingredients"
            placeholder="New Ingredient"
            fullWidth
          />
        )}
      />
    </Box>
  );
}

export default IngredientsForm;