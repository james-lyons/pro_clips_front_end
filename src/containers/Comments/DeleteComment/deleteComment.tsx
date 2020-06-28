import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { deleteComment, fetchComments } from '../../../redux/actions/commentActions/commentActions';

class DeleteComment extends React.PureComponent<Props> {

    handleDelete = async (commentId: string, clipId: string) => {
        const { deleteComment, fetchComments } = this.props;
        await deleteComment(commentId);
        await fetchComments(clipId);
    };

    render() {
        const userId = localStorage.getItem('uid');
        const { comment, clipId } = this.props;
        const { handleDelete } = this;


        const userActions = () => {
            return (
                <Dropdown
                    basic
                    floating
                    size='mini'
                    icon='ellipsis vertical'
                    className='icon'
                >
                <Dropdown.Menu>
                    <Dropdown.Item icon='attention' text='Report' />
                </Dropdown.Menu>
              </Dropdown>
            );
        };
    
        const posterActions = (commentId: string, clipId: string) => {
            return (
                <Dropdown
                    basic
                    floating
                    size='mini'
                    icon='ellipsis vertical'
                    className='icon'
                >
                    <Dropdown.Menu>
                        <Dropdown.Item
                            icon='delete'
                            text='Delete'
                            onClick={ () => handleDelete(commentId, clipId) }
                        />
                    </Dropdown.Menu>
                </Dropdown>
            );
        };

        return (
            <>
                { userId === comment.author_id ? posterActions(comment._id, clipId) : userActions() }
            </>
        );
    };
};

export default connect(null, { deleteComment, fetchComments })(DeleteComment);
