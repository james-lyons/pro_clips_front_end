import React from 'react';
import { Props } from './config';
import { Card, Form } from 'semantic-ui-react';

const EditTitleForm: React.SFC<Props> = ({ newTitle, handleChange, handleClipEdit }) => {
    return (
        <Card.Content>
            <Form onSubmit={ handleClipEdit }>
                <Form.Field>
                    <Form.Input
                        label={ `${ newTitle.length }/50` }
                        error={ newTitle.length > 50 }
                        type='text'
                        name='newTitle'
                        placeholder='Edit your title here'
                        value={ newTitle }
                        onChange={ handleChange }
                    />
                </Form.Field>
            </Form>
        </Card.Content>
    );
};

export default EditTitleForm;