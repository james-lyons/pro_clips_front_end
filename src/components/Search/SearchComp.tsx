import React from 'react';
import { Props } from './config';
import { Search } from 'semantic-ui-react'

const SearchComp: React.SFC<Props> = ({ search, searchResults, handleChange, handleSelect }) => {
    return (
        <>
            <Search
                value={ search }
                { ...searchResults }
                results={ searchResults }
                onSearchChange={ handleChange }
                onResultSelect={ handleSelect }
            />
        </>
    );
};

export default SearchComp;
