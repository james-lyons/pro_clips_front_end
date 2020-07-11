import React from 'react';
import { Props } from './config';
import { Form, Button, Container, Message } from 'semantic-ui-react';

const ClipUploadComponent: React.SFC<Props> = ({
    title,
    error,
    fileError,
    isLoading,
    wasSubmitted,
    submitSuccess,
    handleChange,
    handleSelect,
    handleUploadClip,
}) => {

    const theme = localStorage.getItem('theme');

    return (
        <>
            <Container id='clip-upload-container'>
                
                { isLoading && <Message info><p>Loading</p></Message>}
                { submitSuccess && <Message info><p>Success!</p></Message> }
                { error && <Message error><p>Please select a game!</p></Message> }

                {
                    fileError &&
                    <Message error>
                        <p>The file you have selected is too large, try another</p>
                    </Message>
                }

                <Form onSubmit={ handleUploadClip } inverted={ theme === 'dark' }>
                    <Form.Input
                        label={`Title ${ title.length } / 50` }
                        error={ title.length > 50 && 'Please shorten your title' }
                        required
                        type="text"
                        name="title"
                        placeholder="Rad 1v5 man"
                        value={ title }
                        onChange={ handleChange }
                    />

                    <Form.Input
                        required
                        label='File'
                        type='file'
                        name='file'
                        onChange={ handleSelect }
                    />

                    <Form.Field
                        required
                        name='game'
                        control='select'
                        onChange={ handleChange }
                    >
                        <option value="Select">Select</option>
                        <option value="Apex Legends">Apex Legends</option>
                        <option value="Valorant">Valorant</option>
                        <option value="Crucible">Crucible</option>
                        <option value="League of Legends">League of Legends</option>
                        <option value="Call of Duty: Warzone">Call of Duty: Warzone</option>
                        <option value="Counter Strike: Global Offensive">Counter Strike: Global Offensive</option>
                        <option value="Escape from Tarkov">Escape from Tarkov</option>
                        <option value="World of Warcraft">World of Warcraft</option>
                        <option value="Grand Theft Auto: V">Grand Theft Auto: V</option>
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
                    </Form.Field>
                    
                    <Button color='red' content={ wasSubmitted ? 'Success!' : 'Submit' } />
                </Form>
            </Container>
        </>
    );
};

export default ClipUploadComponent;
