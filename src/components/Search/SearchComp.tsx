import React from 'react';
import { Form, Col } from 'react-bootstrap';
import { Props } from './config';

const SearchComp: React.SFC<Props> = ({ search, handleChange, handleSubmit }) => {
    return (
        <>
            <Form onSubmit={ handleSubmit }>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="search"
                        placeholder="Search Users"
                        value={ search }
                        onChange={ handleChange }
                    />
                </Form.Group>
            </Form>
        </>
    );
};

export default SearchComp;