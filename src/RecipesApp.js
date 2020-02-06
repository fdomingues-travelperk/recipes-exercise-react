import { AppBar, Box, Container, Grid, Paper, Toolbar, Typography } from "@material-ui/core";
import React from 'react';
import { Route, Switch } from "react-router-dom";
import Recipe from "./Recipe";
import CreateRecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";


function RecipesApp() {

  return (
    <div>
      <AppBar color='primary' position='static'>
        <Container maxWidth='lg'>
          <Toolbar>
            <Typography variant='h3' color='inherit'>Cookbook</Typography>
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth="lg">
        <Box mt={4}>
          <Grid container spacing={4}>
            <Grid item md={4} xs={12}>
              <RecipeList/>
            </Grid>
            <Grid item md={8} xs={12}>
              <Paper elevation={3}>
                <Switch>
                  <Route exact path="/new" render={CreateRecipeForm}/>
                  <Route exact path="/recipe/:id" component={Recipe}/>
                  <Route render={() => ''}/>
                </Switch>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
}

export default RecipesApp;