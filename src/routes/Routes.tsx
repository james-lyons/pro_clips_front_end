import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/HomeContainer/Home';
import FeaturedClips from '../containers/FeaturedClipsContainer/FeaturedClips';
import BrowseClips from '../containers/BrowseContainer/BrowseClips';
import Profile from '../containers/ProfileContainer/Profile';
import EditProfile from '../containers/EditProfileContainer/EditProfile';
import ClipUpload from '../containers/ClipUpload/ClipUpload';
import Settings from '../containers/SettingsContainer/Settings';
import Login from '../containers/AuthContainer/Login';
import Register from '../containers/AuthContainer/Register';


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
            <PrivateRoute path='/editProfile' component={ EditProfile } />
            <PrivateRoute path='/clipUpload' component={ ClipUpload } />
            <PrivateRoute path='/settings' component={ Settings } />
        </Switch>
    );
});
