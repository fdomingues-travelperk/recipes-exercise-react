import { Button, Divider, List, ListItem, ListItemText, Paper, Typography } from "@material-ui/core";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import React, { useContext, useEffect } from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import styled from "styled-components";
import { RecipeContext } from "./contexts/recipe.context";
import SearchForm from "./SearchForm";

const RecipeListWrapper = styled(List)`
  max-height: 70vh;
  overflow: auto
`;

const NewRecipeLink = styled(Link)`
  text-decoration: none;
  color: white
`;

const RecipeButtonWrapper = styled.div`
  display: flex;
  align-items: center
`;

function ListItemLink(props) {
  const {primary, to, selected, onClick} = props;

  const renderLink = React.useMemo(
    () => React.forwardRef(
      (itemProps, ref) => <Link to={to} ref={ref} {...itemProps} />
    ),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink} selected={selected} onClick={onClick}>
        <ListItemText primary={primary}/>
      </ListItem>
    </li>
  );
}

function RecipeList() {
  const {recipes, loading, loadRecipes} = useContext(RecipeContext);
  const match = useRouteMatch("/recipe/:id");

  const selectedRecipe = match ? match.params.id : '';

  useEffect(() => {
    loadRecipes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return <div>Loading Recipes...</div>
  }

  return (
    <Paper elevation={3}>
      <ListItem>
        <SearchForm/>
      </ListItem>
      <Divider/>
      <RecipeListWrapper>
        {recipes.map(recipe => (
          <ListItemLink
            button
            key={recipe.id}
            selected={selectedRecipe === recipe.id.toString()}
            to={`/recipe/${recipe.id}`}
            primary={recipe.name}
          >
          </ListItemLink>
        ))}
      </RecipeListWrapper>
      <Divider/>
      <ListItem>
        <Button
          variant="contained"
          color="primary"
          fullWidth
        >
          <NewRecipeLink to={"/new"}>
            <RecipeButtonWrapper>
              <Typography>Create new Recipe</Typography>
              <ChevronRightIcon/>
            </RecipeButtonWrapper>
          </NewRecipeLink>
        </Button>
      </ListItem>
    </Paper>
  );
}

export default RecipeList;