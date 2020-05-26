import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';

interface Props {
    uploadClip: () => {},
    handleChange: () => {}
};

const ClipUploadComponent: React.SFC<Props> = ({ uploadClip, handleChange }) => {

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
