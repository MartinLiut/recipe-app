import React, {Component} from 'react';
import Card from 'material-ui/Card/Card';
import CardTitle from 'material-ui/Card/CardTitle';
import CardHeader from 'material-ui/Card/CardHeader';
import CardMedia from 'material-ui/Card/CardMedia';
import GridList from 'material-ui/GridList/GridList';
import {Link} from 'react-router-dom';
import Favorite from 'material-ui/svg-icons/action/favorite';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Snackbar from 'material-ui/Snackbar';
import Grid from '@material-ui/core/Grid';

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
            <Grid container spacing={16}>
                <GridList cols={5} cellHeight={300} style={{margin: '0px'}}>
                    {this.props.recipes.map(recipe => {
                        return(
                            <Card key={recipe.recipe_id} className="card" key={recipe.recipe_id} expandable='true' style={{margin: '3px'}}>
                                <CardHeader title={<Link to={
                                    {pathname: `/recipe/${recipe.recipe_id}`,
                                    state: {recipe: recipe.title}
                                    }}>{cutString(recipe.title)}</Link>} subtitle={`Rank: ${recipe.social_rank.toFixed(2)}`} avatar={recipe.image_url} style={{padding: '7px'}}>
                                    <FloatingActionButton style={style} mini={true} onClick={(e) => this.addFavorite(e)} >
                                        <Favorite />
                                    </FloatingActionButton>
                                </CardHeader>
                                <Link to={
                                        {pathname: `/recipe/${recipe.recipe_id}`,
                                        state: {recipe: recipe.title}
                                        }}>
                                    <CardMedia overlay={<CardTitle subtitle={`By ${recipe.publisher}`} expandable={true} actAsExpander={true} />}>
                                        <img src={recipe.image_url} alt="" style={{maxHeight: '180px'}} />
                                    </CardMedia>
                                </Link>
                            </Card>
                        );
                    })} 
                    <Snackbar
                        open={this.state.open}
                        message={this.state.message}
                        action="undo"
                        autoHideDuration={3000}
                        onRequestClose={this.handleRequestClose}
                        />
                </GridList>
            </Grid>
        );
    }
}
 
export default Recipes;