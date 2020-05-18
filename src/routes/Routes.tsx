import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home';
import FeaturedClips from '../containers/FeaturedClipsContainer/FeaturedClips';
import BrowseClips from '../containers/BrowseContainer/BrowseClips';
import Profile from '../containers/ProfileContainer/Profile';
import Accounts from '../containers/AccountsContainer/Accounts';
import ClipUpload from '../containers/ClipUpload/ClipUpload';
import Settings from '../containers/SettingsContainer/Settings';
import Login from '../containers/AuthContainer/Login';
import Register from '../containers/AuthContainer/Register';

export default withRouter(() => {

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
            <HideRoute path='/login' component={ Login } />
            <HideRoute path='/register' component={ Register } />
            <Route path='/FeaturedClips' component={ FeaturedClips } />
            <Route path='/browseClips' component={ BrowseClips } />
            <PrivateRoute path='/profile' component={ Profile } />
            <PrivateRoute path='/accounts' component={ Accounts } />
            <PrivateRoute path='/accounts/profile' component={ Accounts } />
            <PrivateRoute path='/clipUpload' component={ ClipUpload } />
            <PrivateRoute path='/settings' component={ Settings } />
        </Switch>
    );
});
