import React from 'react';

interface State {

};

interface Props {

};

class Profile extends React.PureComponent<Props, State> {

    static defaultProps = {

    };

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
