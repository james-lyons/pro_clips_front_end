import React from 'react';

interface State {

};

interface Props {

};

class Home extends React.PureComponent<Props, State> {

    static defaultProps = {

    };

    state: State = {

    };

    render() {
        return (
            <>
                <h1>Hi from the Home Page</h1>
            </>
        );
    };
};

export default Home;
