import React from 'react';
import TextField from 'material-ui/TextField/TextField';

const Form = props => (
    <form onSubmit={props.getRecipe} style={{textAlign: 'center', paddingBottom: '10px', backgroundColor: 'rgba(255, 255, 255, .2)',}}>
        <TextField hintText="Search" name="recipe" type="text" className="input-search" />
    </form>
)

export default Form;

