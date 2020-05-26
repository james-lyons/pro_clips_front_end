import React from 'react';
import { connect } from 'react-redux';
import ClipUploadComponent from '../../components/ClipUploadComponent/ClipUploadComponent';
import { uploadClip } from '../../redux/actions/clipActions/clipActions';

interface State {

};

interface Props {

};

class ClipUpload extends React.PureComponent<Props, State> {

    static defaultProps = {

    };

    state: State = {
        clip: null
    };

    private handleChange = (event: any) => {
        let files = event.target.files;
        let file = files[0]

        console.log('FILES', files);
        console.log('FILE', file);
        // console.log('FILE.name', file.name);

        this.setState({
            clip: file
        });

        // console.log('STATE', this.state);
        // console.log(files);

        // let reader = new FileReader();
        // reader.readAsDataURL(files[0]);
        // reader.onload = (event => {
        //     console.log('FILE DATA', event.target.result);
        // });
    };


    private uploadClip = async () => {
        event.preventDefault();
        // console.log(this.state.clip);
        await this.props.uploadClip(this.state.clip)
    };

    render() {
        return (
            <>
                <ClipUploadComponent uploadClip={ this.uploadClip } handleChange={ this.handleChange }/>
            </>
        );
    }
};

export default connect(null, { uploadClip })(ClipUpload);
