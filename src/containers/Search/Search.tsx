import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { RouteComponentProps } from 'react-router';
import { State, Props, Event, Result, Response } from './config';
import { userSearch } from '../../redux/actions/userActions/userActions';
import SearchComp from '../../components/Search/SearchComp';

class Search extends React.PureComponent<Props & RouteComponentProps, State> {

    state: State = {
        search: '',
        searchResults: null
    };

    private handleChange = async (event: Event) => {
        const { search } = this.state;
        const { userSearch } = this.props;

        await this.setState({ search: event.target.value });
        let res: Response = await userSearch(search);

        if (res.data) {
            await this.setState({ searchResults: res.data })
        };
        
        return;
    };

    private handleSelect = async (event: MouseEvent<HTMLDivElement, MouseEvent>, { result }: Result) => {
        event.preventDefault();
        const { history } = this.props;

        history.location.pathname = "/"
        await history.push(`/user/${ result.title }`);
        location.reload();
    };

    render() {
        const { search, searchResults } = this.state;
        const { handleChange, handleSelect } = this;

        return (
            <>
                <SearchComp
                    search={ search }
                    searchResults={ searchResults }
                    handleChange={ handleChange }
                    handleSelect={ handleSelect }
                />
            </>
        );
    };
};

export default connect(null, { userSearch })(withRouter(Search));
