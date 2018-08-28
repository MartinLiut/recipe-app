import React from 'react';

const Form = props => (
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <form onSubmit={props.getRecipe}>
                <div className="input-group mb-1">
                    <input type="text" className="form-control input-search" name="recipe" placeholder="Search recipe" aria-label="Recipient's username" aria-describedby="btn" />
                </div>
            </form>
        </div>
    </div>
)

export default Form;

