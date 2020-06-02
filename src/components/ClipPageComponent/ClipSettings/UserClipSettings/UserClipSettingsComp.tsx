import React from 'react';
import { connect } from 'react-redux';
import { Form, Col, Dropdown, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Props, State } from './config';
import { editClip, deleteClip } from '../../../../redux/actions/clipActions/clipActions';

const element = <FontAwesomeIcon icon={ faBars } />

class UserClipSettings extends React.PureComponent<Props, State> {

    state: State = {
        clipVis: 'none',
        newTitle: ''
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    private handleClipEdit = (event: any) => {
        event.preventDefault();
        this.props.editClip(this.props.clip._id, this.state.newTitle);
        this.showClip();
    };

    private handleClipDelete = (clipId: string) => {
        this.props.deleteClip(clipId);
        this.props.history.push(`/${ this.props.user.userName }`)
    };

    private showClip = () => {
        const { clipVis } = this.state;

        if (clipVis === '') {
            this.setState({
                clipVis: 'none'
            });
        } else if (clipVis === 'none') {
            this.setState({
                clipVis: ''
            });
        };
    };

    render() {
        const { clip } = this.props;
        const { clipVis, newTitle } = this.state;
        const { showClip, handleChange, handleClipEdit, handleClipDelete } = this;

        return (

            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '91.9% 8.1%' }}>
                    <h1 style={{ fontSize: '1.3rem' }}>{ clip.title } { clip.game }</h1>
                    
                    <Dropdown>
                        <Dropdown.Toggle>
                            { element }
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={ () => showClip() }>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={ () => handleClipDelete(clip._id) }>Delete</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <div style={{ display: this.state.clipVis }}>
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
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        clip: state.clipReducer.clip
    };
};

export default connect(mapStateToProps, { editClip, deleteClip })(UserClipSettings);
