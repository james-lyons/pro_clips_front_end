import React from 'react';
import { Props } from './config';
import { Form, Button } from 'react-bootstrap';

const ClipUploadComponent: React.SFC<Props> = ({ title, game, uploadClip, handleChange, handleSelect }) => {

    return (
        <>
            <div className="col-lg-2 col-md-6 col-sm-10 mb-4" style={{ margin: '4rem auto' }}>
                <Form onSubmit={ uploadClip } encType="multipart/form-data">
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
                                id="game"
                                name="game"
                                as="select"
                                value={ game }
                                onChange={ handleChange }
                            >
                                <option value="">Select</option>
                                <option value="Apex Legends">Apex Legends</option>
                                <option value="League of Legends">League of Legends</option>
                                <option value="C.O.D. Warzone">C.O.D. Warzone</option>
                                <option value="Valorant">Valorant</option>
                                <option value="Crucible">Crucible</option>
                                <option value="C.S.G.O">C.S.G.O</option>
                                <option value="Escape from Tarkov">Escape from Tarkov</option>
                                <option value="World of Warcraft">World of Warcraft</option>
                                <option value="G.T.A. V">G.T.A. V</option>
                                <option value="Hearthstone">Hearthstone</option>
                                <option value="Gwent">Gwent</option>
                                <option value="Dota 2">Dota 2</option>
                                <option value="Terreria">Terreria</option>
                                <option value="Minecraft">Minecraft</option>
                                <option value="Overwatch">Overwatch</option>
                                <option value="Teamfight Tacticts">Teamfight Tacticts</option>
                                <option value="Rainbow 6 Seige">Rainbow 6 Seige</option>
                                <option value="PUB G">PUB G</option>
                                <option value="Smite">Smite</option>
                                <option value="Fortnite">Fortnite</option>
                            </Form.Control>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Control
                                required
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Rad 1v5 man"
                                value={ title }
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
