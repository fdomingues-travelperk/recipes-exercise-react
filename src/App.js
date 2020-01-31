import React from 'react';
import './App.css';
import RecipeList from "./RecipeList";
import { Link, Route, Switch } from "react-router-dom";
import CreateRecipeForm from "./CreateRecipeForm";
import RecipeLoader from "./RecipeLoader";
import { RecipesProvider } from "./contexts/recipe.context";

function App() {
  return (
    <RecipesProvider>
      <div>
        <h1>The best recipes in the world!</h1>
        <div>
          <RecipeList/>
          <Link to={"/new"}>New Recipe</Link>
        </div>
        <Switch>
          <Route exact path="/new" component={CreateRecipeForm}/>
          <Route exact path="/recipe/:id" component={RecipeLoader}/>
          <Route render={() => ''}/>
        </Switch>
      </div>
    </RecipesProvider>
  );
}

export default App;
