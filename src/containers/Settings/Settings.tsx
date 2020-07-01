import React from 'react';
import { Message } from 'semantic-ui-react';
import { State, Props } from './config'
import SettingsComp from '../../components/Settings/SettingComp';

class Settings extends React.PureComponent<Props, State> {

    state: State = {
        theme: ''
    };

    componentDidMount = async () => {
        const theme = localStorage.getItem('theme');
        await this.setState({ theme });
    };

    private setLightTheme = () => {
        this.setState({ theme: 'light' });
        localStorage.setItem('theme', 'light');
        location.reload();
    };

    private setDarkTheme = () => {
        this.setState({ theme: 'dark' });
        localStorage.setItem('theme', 'dark');
        location.reload();
    };

    render() {
        const { theme } = this.state;
        const { setLightTheme, setDarkTheme } = this;

        return (
            <>
                <SettingsComp
                    theme={ theme }
                    setDarkTheme={ setDarkTheme }
                    setLightTheme={ setLightTheme }
                />
            </>
        );
    }
};

export default Settings;
