import React from 'react';
import Routes from './routes/Routes';
import NavBar from './containers/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

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
                    <div id='app-container'>
                        <NavBar />
                        <Routes />
                        <Footer />
                    </div>
                </div>
            </>
        );
    };
};

export default App;
