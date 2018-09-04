import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import Form from './components/Form';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Recipes from './components/Recipes';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const API_KEY = '1c9a9adbe707aea7c6c348b453b73e9a';

const martin = getMuiTheme({
  palette: {
    primary1Color: '#FF7733'
  }
});

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
    const api_call = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}`);
    const data = await api_call.json();
    console.log(data);
    this.setState({recipes: data.recipes});
  }

  render() {
    

    return (
      <div className="App">
        <main>
          <MuiThemeProvider muiTheme={getMuiTheme(martin)}>
            <NavBar/>
            <div className="form-container">
              <Navigation />
              <Form getRecipe={this.getRecipe}/> 
            </div>
            <Recipes recipes={this.state.recipes} />
          </MuiThemeProvider>
        </main>  
        <Footer />
      </div>
    );
  }
}

export default App;
