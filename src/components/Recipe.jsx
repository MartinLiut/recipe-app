import React, {Component} from 'react';
import {Link} from 'react-router-dom';

const API_KEY = '1c9a9adbe707aea7c6c348b453b73e9a';

class Recipe extends Component {
    state = { 
        activeRecipe: []
    }

    componentDidMount = async () => {
        const recipe = this.props.location.state.recipe;
        const req = await fetch(`https://www.food2fork.com/api/search?key=${API_KEY}&q=${recipe}`);
        const res = await req.json();
        this.setState({activeRecipe: res.recipes[0]});
    }

    render() {
        const recipe = this.state.activeRecipe;
        return ( 
            <div className="container">
                {
                    this.state.activeRecipe.length !== 0 &&

                    <div className="row">
                    <Link to='/'>Go Home</Link>
                    <div className="col-md-12">
                    <div className="card mb-12 shadow-sm">
                        <div className="row">
                            <div className="col-md-5">
                            <img className="card-img-top" style={{height: '225px', width: '100%', display: 'block'}} src={recipe.image_url} data-holder-rendered="true" />
                            </div>
                            <div className="col-md-7">
                                <div className="card-body">
                            <p className="card-text">{recipe.title}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">View</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button>
                                </div>
                                <small className="text-muted">9 mins</small>
                            </div>
                        </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
                }
            </div> 
        );
    }

    
}
 
export default Recipe;