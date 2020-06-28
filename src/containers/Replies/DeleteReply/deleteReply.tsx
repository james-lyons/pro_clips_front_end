import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { deleteReply } from '../../../redux/actions/replyActions/replyActions';
import { fetchComments } from '../../../redux/actions/commentActions/commentActions';

class DeleteComment extends React.PureComponent <Props> {

    handleDelete = async (replyId: string, clipId: string) => {
        await this.props.deleteReply(replyId);
        await this.props.fetchComments(clipId);
    };

    render() {

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
    
        const posterActions = (replyId: string, clipId: string) => {
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
                            onClick={ () => this.handleDelete(replyId, clipId) }
                        />
                    </Dropdown.Menu>
                </Dropdown>
            );
        };

        const userId = localStorage.getItem('uid');
        const { reply, clipId } = this.props;

        return (
            <>
                { userId === reply.author_id ? posterActions(reply._id, clipId) : userActions() }
            </>
        );
    };
};

export default connect(null, { deleteReply, fetchComments })(DeleteComment);
