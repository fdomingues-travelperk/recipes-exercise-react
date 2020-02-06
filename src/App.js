import React from 'react';
import './App.css';
import { RecipesProvider } from "./contexts/recipe.context";
import RecipesApp from "./RecipesApp";

function App() {

  return (
    <RecipesProvider>
      <RecipesApp/>
    </RecipesProvider>
  );
}

export default App;
