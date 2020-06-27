import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/Home/Home';
import Login from '../containers/Auth/Login/Login';
import Register from '../containers/Auth/Register/Register';
import Profile from '../containers/Profile/Profile/Profile';
import Accounts from '../containers/Accounts/Accounts/Accounts';
import ClipPage from '../containers/Clips/ClipPage/ClipPage';
import ClipUpload from '../containers/Clips/ClipUpload/ClipUpload';
import PopularClips from '../containers/Clips/PopularClips/PopularClips';
import GameClips from '../containers/Clips/BrowseClips/GameClips/GameClips';
import BrowseClips from '../containers/Clips/BrowseClips/BrowseClips/BrowseClips';
import Settings from '../containers/Settings/Settings';

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
            <Route exact path='/browseClips' component={ BrowseClips } />
            <Route exact path='/popularClips' component={ PopularClips } />
            <HideRoute exact path='/login' component={ Login } />
            <HideRoute exact path='/register' component={ Register } />
            <PrivateRoute exact path='/accounts' component={ Accounts } />
            <PrivateRoute exact path='/accounts/site_settings' component={ Accounts } />
            <PrivateRoute exact path='/accounts/account_settings' component={ Accounts } />
            <PrivateRoute exact path='/accounts/delete' component={ Accounts } />
            <PrivateRoute exact path='/clipUpload' component={ ClipUpload } />
            <Route exact path='/:username' component={ Profile } />
            <Route exact path='/clip/:clipId' component={ ClipPage } />
            <Route exact path='/browseclips/:game' component={ GameClips } />
        </Switch>
    );
});
