import React from 'react';
import {Link} from 'react-router-dom';

const cutString = str => {
    return str.length > 20 ? str.substring(0, 20) + '...' : str;
}

const Recipes = props => (
    <div className="container recipe_container">
        <div className="row">
            <div className="card-deck">
                {props.recipes.map(recipe => {
                    return(
                        <div className="col-md-3 pb-4" key={recipe.recipe_id}>
                            <Link to={
                                        {
                                            pathname: `/recipe/${recipe.recipe_id}`,
                                            state: {recipe: recipe.title}
                                        }
                                    }>
                                <div className="card m-0 shadow-sm" key={recipe.recipe_id}>
                                    <img className="card-img-top recipe_img" src={recipe.image_url} alt={recipe.title} />
                                    <div className="card-body">
                                        <h6 className="card-title m-0">{cutString(recipe.title)}</h6>
                                    </div>
                                    <div className="card-footer p-0">
                                        <small className="text-muted">By {recipe.publisher}</small>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })} 
            </div>
        </div>
    </div>
)
 
export default Recipes;