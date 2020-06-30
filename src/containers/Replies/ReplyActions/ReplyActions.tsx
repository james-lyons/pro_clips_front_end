import React from 'react';
import { Props } from './config';
import { connect } from 'react-redux';
import { Dropdown } from 'semantic-ui-react';
import { deleteReply } from '../../../redux/actions/replyActions/replyActions';
import { fetchComments } from '../../../redux/actions/commentActions/commentActions';
import ReportReply from '../../../containers/Report/Reply/ReportReply';

class DeleteComment extends React.PureComponent <Props> {

    handleDelete = async (replyId: string, clipId: string) => {
        await this.props.deleteReply(replyId);
        await this.props.fetchComments(clipId);
    };

    render() {

        const reporter = localStorage.getItem('uid');

        const userActions = () => {
            return (
                <>
                    {
                        reporter &&
                        <Dropdown
                            basic
                            floating
                            size='mini'
                            direction='left'
                            icon='ellipsis vertical'
                            className='icon'
                        >
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <ReportReply
                                        offender={ reply.author_id }
                                        reporter={ reporter }
                                        reply_id={ reply._id }
                                        report_text={ reply.reply_text }
                                    />
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    }
                </>
            );
        };
    
        const posterActions = (replyId: string, clipId: string) => {
            return (
                <Dropdown
                    basic
                    floating
                    size='mini'
                    direction='left'
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
