import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

interface Props {
    clip_title: string,
    uploadClip: () => {},
    handleChange: () => {},
    handleSelect: () => {}
};

const ClipUploadComponent: React.SFC<Props> = ({ clip_title, uploadClip, handleChange, handleSelect }) => {

    return (
        <>
            <div className="col-8" style={{ margin: '0 auto' }}>
                <Form className="col-8" onSubmit={ uploadClip } encType="multipart/form-data">
                    <Form.Row>
                        <Form.Group>
                            <Form.Label htmlFor="file">Upload Clips</Form.Label>
                            <Form.Control
                                required
                                type="file"
                                id="file"
                                name="clip"
                                onChange={ handleSelect }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Control
                                required
                                type="text"
                                id="clip_title"
                                name="clip_title"
                                placeholder="Rad 1v5 man"
                                value={ clip_title }
                                onChange={ handleChange }
                            />
                        </Form.Group>
                    </Form.Row>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        </>
    );
};

export default ClipUploadComponent;
