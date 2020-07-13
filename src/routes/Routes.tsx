import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../components/Home/Home';
import Login from '../containers/Auth/Login/Login';
import Register from '../containers/Auth/Register/Register';
import Profile from '../containers/Profile/Profile/Profile';
import ClipPage from '../containers/Clips/ClipPage/ClipPage';
import Accounts from '../containers/Accounts/Accounts/Accounts';
import ClipUpload from '../containers/Clips/ClipUpload/ClipUpload';
import PopularClips from '../containers/Clips/PopularClips/PopularClips';
import GameClips from '../containers/Clips/BrowseClips/GameClips/GameClips';
import BrowseClips from '../containers/Clips/BrowseClips/BrowseClips/BrowseClips';
import UnavailableComp from '../components/Unavailable/UnavailableComp';

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
            <HideRoute exact path='/login' component={ Login } />
            <HideRoute exact path='/register' component={ Register } />
            <Route exact path='/browseclips' component={ BrowseClips } />
            <Route exact path='/popularclips' component={ PopularClips } />
            <PrivateRoute path='/accounts' component={ Accounts } />
            <PrivateRoute exact path='/clipUpload' component={ ClipUpload } />
            <Route exact path='/:username' component={ Profile } />
            <Route path='/clip/:clipId' component={ ClipPage } />
            <Route path='/browseclips/:game' component={ GameClips } />
            <Route component={ UnavailableComp } />
        </Switch>
    );
});
