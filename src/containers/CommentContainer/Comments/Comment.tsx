import React from 'react';
import { connect } from 'react-redux';
import CommentComponent from '../../../components/CommentComponent/Comments/commentComponent';
import { Props, State } from './config';

class Comment extends React.PureComponent<Props, State> {

    state: State = {
        commentText: ''
    };

    private handleChange = (event: any) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    render() {
        const { handleChange } = this;
        
        return (
            <>
                <CommentComponent handleChange={ handleChange }/>
            </>
        );
    };
};

export default connect(null, null)(Comment);
