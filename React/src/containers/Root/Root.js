import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import TaskManager from '../TaskManager/TaskManager';
import ShoppingList from '../ShoppingList/ShoppingList';
import Login from '../Login/Login';
import classes from './Root.css';
import shoppingListLogo from '../../icons/ShoppingCart.png';
import calendarLogo from '../../icons/ComingUp.png';
//import Drawer from 'material-ui/Drawer';
//import MenuItem from 'material-ui/MenuItem';

class Root extends Component {

    render() {
        return (
            <div className={classes.Root}>
                <div className={classes.sideDrawer} >
                    <div>
                        <NavLink to="/shopping-list" exact activeStyle={{
                            backgroundColor: 'rgb(0, 188, 212)'
                        }}>
                            <img className={classes.resizeImage} border="0" alt="Shopping List" src={shoppingListLogo} />
                        </NavLink>
                    </div>
                    <div>
                        <NavLink to="/" exact activeStyle={{
                            backgroundColor: 'rgb(0, 188, 212)'
                        }}>
                            <img className={classes.resizeImage} border="0" alt="Task Manager" src={calendarLogo} />
                        </NavLink>
                    </div>
                </div>

                <Route path='/' exact component={TaskManager} />
                <Route path='/shopping-list' exact render={() => <ShoppingList />} />
                <Route path='/login' exact component={Login} />
            </div>
        );
    }
}

export default Root;