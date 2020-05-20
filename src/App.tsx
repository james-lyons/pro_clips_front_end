import React from 'react';
import Routes from './routes/Routes';
import NavBar from './components/NavBarComponent/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';

interface State {
    theme: string
};

interface Props {
    history: {
        push(url: string): void
    };
};

const styles = {
    light: { minHeight: '100%' },
    dark: {
        minHeight: '100%',
        color: '#DADADA',
        background: '#1c2022'
    }
}

class App extends React.PureComponent<Props, State> {

    render() {

        return (
            <>
                <div>
                    <div style={{ minHeight: '100vh' }}>
                        <NavBar />
                        <Routes />
                    </div>
                </div>
            </>
        );
    };
};

export default App;
