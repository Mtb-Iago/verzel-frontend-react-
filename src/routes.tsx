import React from 'react';
import { Route, BrowserRouter, Switch, Redirect, RouteProps } from 'react-router-dom';

import Home from './pages/home';
import Admin from './pages/admin';
import Login from './pages/login';

import {  TOKEN_KEY } from "./services/auth";

interface IPrivateRouteProps extends RouteProps {
    isAuth: boolean 
    redirectPath: string
}


const PrivateRoute: React.FC<IPrivateRouteProps> = (props) => {
    const isAuthenticated = localStorage.getItem(TOKEN_KEY) ? true : false;
    return isAuthenticated ? (
        <Route {...props} component={props.component} render={undefined} />
    ) : (
        <Redirect to={{ pathname: props.redirectPath }} />
    )
}

const Routes = () => {
    const isAuthenticated = localStorage.getItem(TOKEN_KEY) ? true : false;
    return (
        <BrowserRouter>
            <Switch>
                <Route component={Home} path="/" exact />
                <Route component={Login} path="/login" />
                <PrivateRoute isAuth={isAuthenticated} component={Admin} redirectPath="/" path="/admin" />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes; 