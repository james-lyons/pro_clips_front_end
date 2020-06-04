import React from 'react';
import { Col, Form, Button } from 'react-bootstrap';
import { Props } from './config';

const CommentComponent: React.SFC<Props> = ({ commentText, handleChange, handleSubmit }) => {

    return (
        <>
            <Form onSubmit={ handleSubmit }>
                <Form.Group>
                    <Form.Control
                        type="text"
                        name="commentText"
                        value={ commentText }
                        placeholder='Add a comment'
                        onChange={ handleChange }
                    />
                </Form.Group>
            </Form>
        </>
    );
};

export default CommentComponent;
