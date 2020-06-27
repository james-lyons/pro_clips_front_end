import React from 'react';
import { message } from 'semantic-ui-react';
import { State, Props } from './config'

class Settings extends React.PureComponent<Props, State> {

    state: State = {

    };

    render() {
        return (
            <>
                <h1>Hi From Settings</h1>
            </>
        );
    }
};

export default Settings;
