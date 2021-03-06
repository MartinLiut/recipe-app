import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';

const API_KEY = '1c9a9adbe707aea7c6c348b453b73e9a';

class App extends Component {
  state = {
    recipes: [],
    error: null
  }

  componentDidMount = () => {
    if(localStorage.getItem('recipes'))
     this.setState({recipes: JSON.parse(localStorage.getItem('recipes'))});
  }

  componentDidUpdate = () => {
    const recipes = JSON.stringify(this.state.recipes);
    localStorage.setItem('recipes', recipes);
  }

  getRecipe = async e => {
    e.preventDefault();
    const recipe = e.target.elements.recipe.value;
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}&count=5`);
    //const api_call = await fetch(`http://food2fork.com/api/search?key=1c9a9adbe707aea7c6c348b453b73e9a&q=chicken&count=5`);
    const data = await api_call.json();
    this.setState({recipes: data.recipes});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Form getRecipe={this.getRecipe}/> 
        </header>
        <main>
          <Recipes recipes={this.state.recipes} />
        </main>  
      </div>
    );
  }
}

export default App;
