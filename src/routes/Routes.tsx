import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/homeContainer/home';
import Popular from '../containers/popularContainer/popular';
import Profile from '../containers/profileContainer/profile';
import ClipUpload from '../containers/clipUpload/clipUpload';

interface Props {

};

export default withRouter(({ }: any) => {

    const currentUser = localStorage.getItem('uid');

    const PrivateRoute = ({ component: Component, ...rest }: any) => (
        <Route { ...rest } render={(props) => (
            currentUser
            ? <Component { ...props }/>
            : <Redirect to='/' />
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={() =>
                <Home />
            }/>
            <Route path='/popular' component={ Popular } />
            <Route path='/profile' component={ Profile } />
            <Route path='/clipupload' component={ ClipUpload } />
        </Switch>
    );
});
