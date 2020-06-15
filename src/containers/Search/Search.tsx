import React from 'react';
import { withRouter } from 'react-router'
import { State, Props } from './config';
import { fetchCurrentUser, fetchUser } from '../../redux/actions/userActions/userActions';
import SearchComp from '../../components/Search/SearchComp';

class Search extends React.PureComponent <Props, State> {

    state: State = {
        search: ''
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleSubmit = async () => {
        event.preventDefault();
        await this.props.history.push(`${ this.state.search }`);
        await this.setState({
            search: ''
        });
        location.reload();
    };

    render() {
        const { search } = this.state;
        const { handleChange, handleSubmit } = this;
        return (
            <>
                <SearchComp search={ search } handleChange={ handleChange } handleSubmit={ handleSubmit }/>
            </>
        );
    };
};

export default withRouter(Search);