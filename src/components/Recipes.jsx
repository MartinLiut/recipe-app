import React, {Component} from 'react';
import Card from 'material-ui/Card/Card';
import CardTitle from 'material-ui/Card/CardTitle';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import Grid from '@material-ui/core/Grid';import {Link} from 'react-router-dom';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';

const cutString = str => {
    return str.length > 19 ? str.substring(0, 19) + '...' : str;
}

const style = {
    position: 'absolute',
    right: '5px',
    top: '5px',
}

class Recipes extends Component {
    state = { 
        message: 'Added to favorites',
        open: false,
    }

    addFavorite = e => {
        console.log(e.target);
        this.setState({open: true,});
    }

    handleRequestClose = () => {
        this.setState({
            open: false,
        });
    };

    render() { 
        return ( 
            <Grid container style={{ padding: '0px 15%', backgroundColor:'rgba(255, 255, 255, .4)'}} >
                {this.props.recipes.map(recipe => {
                    return(
                        <Grid item key={recipe.recipe_id} sm={6} md={4} lg={3}>
                            <Card 
                                className="card" 
                                style={{margin: '10px'}}
                                >
                                <CardHeader 
                                    title={<Link to={
                                            {pathname: `/recipe/${recipe.recipe_id}`,
                                            state: {recipe: recipe.title}
                                            }}>{cutString(recipe.title)}</Link>} 
                                    subtitle={`Rank: ${recipe.social_rank.toFixed(2)}`} 
                                    avatar={recipe.image_url} 
                                    style={{padding: '7px'}}>
                                    <FloatingActionButton style={style} mini={true} onClick={(e) => this.addFavorite(e)} >
                                        <Favorite />
                                    </FloatingActionButton>
                                </CardHeader>
                                <Link to={
                                        {pathname: `/recipe/${recipe.recipe_id}`,
                                        state: {recipe: recipe.title}
                                        }}>
                                    <CardMedia overlay={<CardTitle subtitle={`By ${recipe.publisher}`} expandable={true} actAsExpander={true} />}>
                                        <img src={recipe.image_url} alt="" style={{maxHeight: '150px'}} />
                                    </CardMedia>
                                </Link>
                            </Card>
                        </Grid>
                    );
                })} 
                <Snackbar
                    open={this.state.open}
                    message={this.state.message}
                    action="undo"
                    autoHideDuration={3000}
                    onRequestClose={this.handleRequestClose}
                    />
            </Grid>
        );
    }
}
 
export default Recipes;