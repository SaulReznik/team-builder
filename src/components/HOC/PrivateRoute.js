import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem('userToken') ? (
            React.createElement(component, props)
        ) : (
                <Redirect to={{
                    pathname: '/login',
                }} />
            )
    )} />
);

export default PrivateRoute;