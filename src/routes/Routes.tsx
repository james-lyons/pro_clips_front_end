import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/homeContainer/home';
import FeaturedClips from '../containers/FeaturedClipsContainer/FeaturedClips';
import BrowseClips from '../containers/browseContainer/browseClips';
import Profile from '../containers/profileContainer/profile';
import ClipUpload from '../containers/clipUpload/clipUpload';
import Login from '../containers/authContainer/Login';
import Register from '../containers/authContainer/Register';

interface Props {

};

export default withRouter(({ setCurrentUser }: any) => {

    const currentUser = localStorage.getItem('uid');

    const PrivateRoute = ({ component: Component, ...rest }: any) => (
        <Route { ...rest } render={(props) => (
            currentUser
            ? <Component { ...props }/>
            : <Redirect to='/' />
        )} />
    );

    const HideRoute = ({ component: Component, ...rest }: any) => (
        <Route { ...rest } render={(props) => (
            currentUser
            ? <Redirect to='/' />
            : <Component { ...props }/>
        )} />
    );

    return (
        <Switch>
            <Route exact path='/' component={ Home }/>
            <HideRoute path='/login' component={ Login } setCurrentUser={ setCurrentUser } />
            <HideRoute path='/register' component={ Register } />
            <Route path='/FeaturedClips' component={ FeaturedClips } />
            <Route path='/browseClips' component={ BrowseClips } />
            <PrivateRoute path='/profile' component={ Profile } />
            <PrivateRoute path='/clipUpload' component={ ClipUpload } />
        </Switch>
    );
});
