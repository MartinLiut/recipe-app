import AppBar from 'material-ui/AppBar/AppBar';
import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/';

class NavBar extends Component {
    state = { 
        open: true,
        anchor: 'left',
    }

    handleDrawerOpen = () => {
        this.setState({open: !this.state.open});
    }

    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    render() { 
        return ( 
            <React.Fragment>
                <AppBar title='Recipe Search' style={{background: 'rgba(0, 188, 212, .2)'}} />
                <Drawer variant="persistent"
                        anchor={500}
                        open={this.state.open}>
                    <div>
                        <IconButton onClick={this.handleDrawerClose}>
                           <ChevronRightIcon />
                        </IconButton>
                    </div>
                    <Divider />
                    <List>Hola</List>
                    <Divider />
                </Drawer>
            </React.Fragment>
        );
    }
}
 
export default NavBar;