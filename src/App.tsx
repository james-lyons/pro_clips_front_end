import React from 'react';
import Routes from './routes/Routes';
import API_URL from './constants';
import NavBar from './components/navBarCompnent/navBar';
import 'bootstrap/dist/css/bootstrap.min.css';


interface State {
    currentUser: string,
    error: null | string
};

interface Props {
    history: {
        push(url: string): void
    };
};

class App extends React.PureComponent<Props, State> {

    static defaultProps = {
        history
    };

    state: State = {
        currentUser: '',
        error: null
    };

    private setCurrentUser = (userId: string) => {
        localStorage.setItem('uid', userId);
        this.setState({ currentUser: userId })
    };

    private logout = async () => {
        localStorage.removeItem('uid');
        try {
            fetch(`${ API_URL }auth/logout`, { method: 'POST', credentials: 'include' });
            await this.props.history.push('/');
            await this.setState({ currentUser: '' });
        } catch (error) {
            this.setState({
                error: error.message
            });
        };
    };

    render() {

        const { currentUser } = this.state;
        const { setCurrentUser, logout } = this;

        return (
            <>
                <NavBar
                    currentUser={ currentUser }
                    setCurrentUser={ setCurrentUser }
                    logout={ logout }
                />
                <Routes currentUser={ currentUser } setCurrentUser={ setCurrentUser } />
            </>
        );
    };
};

export default App;
