import React from 'react';
import {Route, Switch} from 'react-router-dom'
import LandingPage from "./modules/LandingPage";

export const makeMainRoutes = () => {
    return (
        <Switch>
            <Route path="/" render={(props) => <LandingPage {...props} />}/>
        </Switch>
    );
}

