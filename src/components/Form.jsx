import React from 'react';

const Form = props => (
    <div className="row">
        <div className="col-md-4 offset-md-4">
            <form onSubmit={props.getRecipe}>
                <div className="input-group mb-1">
                    <input type="text" className="form-control" name="recipe" placeholder="Search recipe" aria-label="Recipient's username" aria-describedby="btn" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" id="btn">Search</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
)

export default Form;

