import React from 'react';
import { withRouter } from 'react-router';
import { State, Props, Event } from './config';
import { RouteComponentProps } from 'react-router';
import SearchComp from '../../components/Search/SearchComp';

class Search extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        search: ''
    };

    private handleChange = (event: Event) => {
        this.setState({
            search: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();
        const { history } = this.props;

        history.location.pathname = "/"
        await history.push(`${ this.state.search }`);
        location.reload();
    };

    render() {
        const { search } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <SearchComp
                    search={ search }
                    handleChange={ handleChange }
                    handleSubmit={ handleSubmit }
                />
            </>
        );
    };
};

export default withRouter(Search);