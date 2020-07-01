import React from 'react';
import { Header, Button } from 'semantic-ui-react';
import { Props } from './config'

const SettingsComp: React.SFC<Props> = ({ theme, setLightTheme, setDarkTheme }) => {

    const styles = {
        dark: 'inverted',
        light: ''
    };

    return (
        <div id='settings-com-container' style={{ marginTop: '3rem' }}>
            <Header
                as='h2'
                inverted={ theme === 'dark' }
            >
                Site Settings
            </Header>
                <Button.Group>
                    <Button
                        color={ theme === 'light' ? 'red' : 'teal' }
                        onClick={ () => setLightTheme() }
                        active={ theme === 'light' || theme === '' }
                    >
                        light
                    </Button>
                    <Button
                        color={ theme === 'dark' ? 'red' : 'teal' }
                        active={ theme === 'dark' }
                        onClick={ () => setDarkTheme() }
                    >
                        dark
                    </Button>
                </Button.Group>
        </div>
    );
};

export default SettingsComp;
