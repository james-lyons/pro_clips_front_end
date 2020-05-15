import React from 'react';
import { State, Props } from './profile.config';

class Profile extends React.PureComponent<Props, State> {

    state: State = {

    };

    render() {
        return (
            <>
                <h1>Hi from the Profile Page</h1>
            </>
        );
    }
};

export default Profile;
