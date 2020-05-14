import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import Home from '../containers/homeContainer/home';
import PopularClips from '../containers/popularContainer/popularClips';
import BrowseClips from '../containers/browseContainer/browseClips';
import Profile from '../containers/profileContainer/profile';
import ClipUpload from '../containers/clipUpload/clipUpload';
import Login from '../containers/authContainer/login';
import Register from '../containers/authContainer/register';

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

    return (
        <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/login' component={ Login } setCurrentUser={ setCurrentUser } />
            <Route path='/register' component={ Register } />
            <Route path='/popularclips' component={ PopularClips } />
            <Route path='/browseclips' component={ BrowseClips } />
            <Route path='/profile' component={ Profile } />
            <Route path='/clipupload' component={ ClipUpload } />
        </Switch>
    );
});
