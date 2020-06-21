import React from 'react';
import { Props } from './config';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Form, Col, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const UserClipSettingsComp: React.SFC<Props> = ({
    clip,
    clipVis,
    newTitle,
    showClip,
    handleChange,
    handleClipEdit,
    handleClipDelete
}) => {
    const element = <FontAwesomeIcon icon={ faBars } />

    return (
        <>
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '91.9% 8.1%' }}>
                    <h1 style={{ fontSize: '1.3rem' }}>{ clip.title } { clip.game }</h1>
                    
                    <Dropdown>
                        <Dropdown.Toggle id="1">
                            { element }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={ () => showClip() }>
                                Edit
                            </Dropdown.Item>
                            <Dropdown.Item onClick={ () => handleClipDelete(clip._id) }>
                                Delete
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div style={{ display: clipVis }}>
                    <Form onSubmit={ handleClipEdit } style={{ padding: '8px' }}>
                        <Form.Row>
                            <Form.Group as={ Col } controlId="editTitle">
                                <Form.Label>Title</Form.Label>
                                <Form.Control
                                    required
                                    type="text" 
                                    name="newTitle"
                                    placeholder="Update Title"
                                    value={ newTitle }
                                    onChange={ handleChange }
                            />
                            </Form.Group>
                        </Form.Row>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default UserClipSettingsComp;