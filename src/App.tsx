import React from 'react';
import Routes from './routes/Routes';
import NavBar from './containers/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import 'semantic-ui-css/semantic.min.css';
import './index.css';

class App extends React.PureComponent<{}> {

    render() {

        const theme = localStorage.getItem('theme');
        
        const styles = {
            light: 'app-container-light',
            dark: 'app-container-dark'
        };

        return (
            <>
                <div>
                    <div id={ theme === 'dark' ? styles.dark : styles.light }>
                        <NavBar />
                        <Routes />
                    </div>
                    <Footer />
                </div>
            </>
        );
    };
};

export default App;
