import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image from './../img/martin.png';
import Avatar from '@material-ui/core/Avatar';

const styleAvatar = {
    top: '-45px',
    margin: 'auto',
    height: '100px',
    width: '100px'
}

const Footer = () => (
    <footer>
        <Grid container spacing={16} justify="center">
            <Grid item xs={2}>
                <Card style={{position: "relative", overflow:"visible", textAlign: 'center'}}>
                    <Avatar alt="Martin Liut" src={image} id="avatar" style={styleAvatar} />
                    <CardContent style={{}}>
                        
                        <Typography component="h1" variant="title">By Martin Liut</Typography>
                        <Typography component="p" variant="subheading">
                            WEB UI Developer
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </footer>
);

export default Footer;