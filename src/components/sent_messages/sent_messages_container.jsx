import React from 'react';
import { connect } from 'react-redux';
import spinner from '../../assets/images/spinner.png';
import * as actions from './sent_messages_actions';

const mapStateToProps = ({ messagesReducer }) => ({
    messages: messagesReducer.messages,
});

const mapDispatchToProps = (dispatch) => ({
    fetchMessages: (email) => dispatch(actions.fetchMessages(email)),
});

export class Messages extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isMessageModalOpen: false,
        };

        this.fetchMessages = this.fetchMessages.bind(this);
        this.closeMessageModal = this.closeMessageModal.bind(this);
    }

    fetchMessages() {
        const { fetchMessages, user: { email } } = this.props;
        fetchMessages(email);
        this.setState({ isMessageModalOpen: true });
    }

    closeMessageModal() {
        this.setState({ isMessageModalOpen: false });
    }

    render() {
        const { user, messages } = this.props;
        const { isMessageModalOpen } = this.state;

        return (
            <div>
                <a className="fetch-messages-link" onClick={this.fetchMessages}>
                    Click here to view the emails sent from {user.email}
                </a>
                { isMessageModalOpen &&
                    <div className="full-screen-modal-wrapper">
                        <div className="message-modal-wrapper">
                            <div className="close-modal-button-wrapper">
                                <div className="close-modal-button" onClick={this.closeMessageModal}>
                                    Close
                                </div>
                            </div>
                            {
                                messages.map((message, i) => (
                                    <div className="message-container" key={i}>
                                        <p>Subject: {message.subject}</p>
                                        <p>Message: {message.message}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                }
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages);