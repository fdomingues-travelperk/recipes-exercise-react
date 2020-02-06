import { Box, Button, Typography } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import React, { useContext, useEffect, useState } from 'react';
import styled from "styled-components";
import { RecipeContext } from "./contexts/recipe.context";
import IngredientList from "./IngredientList";
import CreateRecipeForm from "./RecipeForm";

const EditButtonDiv = styled.div`
  float: right;
`;

const EditIconStyled = styled(EditIcon)`
  margin-right: 10px;
`;

function Recipe(props) {
  const {getRecipe} = useContext(RecipeContext);
  const [recipe, setRecipe] = useState({});
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);

  const recipeId = props.match.params.id;

  const loadRecipe = async () => {
    const baseRecipe = await getRecipe(recipeId);
    setRecipe(baseRecipe);
    setLoading(false);
    setEditing(false);
  };

  useEffect(() => {
    loadRecipe()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipeId]);


  if (loading) {
    return <div>Loading...</div>
  }

  if (editing) {
    return <CreateRecipeForm edit recipe={recipe} afterEditCallback={loadRecipe}/>
  }

  return (
    <Box p={2}>
      <EditButtonDiv>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          onClick={() => setEditing(true)}
        >
          <EditIconStyled/> Edit
        </Button>
      </EditButtonDiv>
      <Typography variant="h4">{recipe.name}</Typography>
      <Box mt={1}>
        <Typography variant="body1">{recipe.description}</Typography>
      </Box>
      <IngredientList ingredients={recipe.ingredients}/>
    </Box>
  );
}

export default Recipe;