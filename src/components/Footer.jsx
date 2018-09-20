import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import image from './../img/martin.png';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

const styleAvatar = {
    top: '-45px',
    left: '50%',
    transform: 'translateX(-50%)',
    position: 'absolute',
    height: '100px',
    width: '100px'
}

const Footer = () => (
    <footer>
        <Grid container spacing={16} justify="center">
            <Grid item xs={2}>
                <Card style={{overflow:"visible", textAlign: 'center'}}>
                    
                    <CardContent style={{position: "relative"}}>
                        <Avatar alt="Martin Liut" src={image} id="avatar" style={styleAvatar} />
                        <Typography component="h1" variant="title" className="martin">Martin Liut</Typography>
                        <Typography component="p" variant="subheading" className="p">
                            WEB UI Developer
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    </footer>
);

export default Footer;