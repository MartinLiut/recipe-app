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
                        <div className="col-md-3 pb-4">
                            <Link to={`/recipe/${recipe.recipe_id}`}>
                                <div class="card m-0 shadow-sm" key={recipe.recipe_id}>
                                    <img class="card-img-top recipe_img" src={recipe.image_url} alt={recipe.title} />
                                    <div class="card-body">
                                        <h6 class="card-title m-0">{cutString(recipe.title)}</h6>
                                    </div>
                                    <div class="card-footer p-0">
                                        <small class="text-muted">By {recipe.publisher}</small>
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