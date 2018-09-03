import React, {Component} from 'react';
import {BottomNavigationItem, BottomNavigation} from 'material-ui/BottomNavigation';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import Refresh from 'material-ui/svg-icons/navigation/refresh';
import Favorite from 'material-ui/svg-icons/action/favorite';

const recentsIcon = <Refresh />;
const favoritesIcon = <Favorite />;
const nearbyIcon = <IconLocationOn />;

class Navigation extends Component {
    state = { 
        selectedIndex: 0
    }

    select = (index) => this.setState({selectedIndex: index});

    render() { 
        return ( 
            <BottomNavigation className="bottom-navigation" selectedIndex={this.state.selectedIndex}>
                <BottomNavigationItem
                label="Recents"
                icon={recentsIcon}
                onClick={() => this.select(0)}
                />
                <BottomNavigationItem
                label="Favorites"
                icon={favoritesIcon}
                onClick={() => this.select(1)}
                />
                <BottomNavigationItem
                label="Nearby"
                icon={nearbyIcon}
                onClick={() => this.select(2)}
                />
            </BottomNavigation>
        );
    }
}

export default Navigation;