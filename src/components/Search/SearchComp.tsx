import React from 'react';
import { Props } from './config';
import { Form } from 'semantic-ui-react'

const SearchComp: React.SFC<Props> = ({ search, handleChange, handleSubmit }) => {
    return (
        <>
              <Form onSubmit={ handleSubmit }>
                <Form.Field>
                    <input
                        type='text'
                        name='search'
                        value={ search }
                        onChange={ handleChange }
                        placeholder='Search Users'
                    />
                </Form.Field>
            </Form>
        </>
    );
};

export default SearchComp;
