import React from 'react';
import { connect } from 'react-redux';
import ClipUploadComponent from '../../components/ClipUploadComponent/ClipUploadComponent';
import { uploadClip } from '../../redux/actions/clipActions/clipActions';

interface State {
    clip: null | object,
    clip_title: string
};

interface Props {

};

class ClipUpload extends React.PureComponent<Props, State> {

    static defaultProps = {

    };

    state: State = {
        clip: null,
        clip_title: ''
    };

    private handleSelect = (event: any) => {
        let files = event.target.files;
        let file = files[0]

        console.log('FILES', files);
        console.log('FILE', file);

        this.setState({
            clip: file
        });
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    private uploadClip = async () => {
        event.preventDefault();
        const { clip, clip_title} = this.state;
        await this.props.uploadClip(clip, clip_title)
    };

    render() {
        const { clip_title } = this.state;
        const { uploadClip, handleSelect, handleChange } = this;

        return (
            <>
                <ClipUploadComponent
                    clip_title={ clip_title }
                    uploadClip={ uploadClip }
                    handleSelect={ handleSelect }
                    handleChange={ handleChange }
                />
            </>
        );
    }
};

export default connect(null, { uploadClip })(ClipUpload);
