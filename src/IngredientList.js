import { Box, Chip, Typography } from "@material-ui/core";
import React from 'react';
import styled from "styled-components";

const IngredientsWrapper = styled.div`
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const IngredientChip = styled(Chip)`
  margin-right: 5px;
`;

function IngredientList({ingredients}) {
  return (
    <Box mt={2}>
      <Typography variant="h5">Ingredients</Typography>
      <IngredientsWrapper>
        {ingredients.map(ing =>
          <IngredientChip key={ing.id} label={ing.name} variant="outlined"/>)}
      </IngredientsWrapper>
    </Box>
  );
}

export default IngredientList;