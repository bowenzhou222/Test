import React from 'react';
import { connect } from 'react-redux';
import IntlTelInput from 'react-intl-tel-input';
import spinner from '../../assets/images/spinner.png';
import * as actions from './customer_feedback_actions';

const mapPropsToState = (dispatch) => ({
    sendMessage: (payload, success, fail) => dispatch(actions.sendMessage(payload, success, fail)),
});

const SuccessfulMessageModal = ({closeModal}) => (
    <div className="full-screen-modal-wrapper" onClick={closeModal}>
        <div className="modal-content">
            <div className="successful-message">
                Thank you for your feedback!
            </div>
        </div>
    </div>
);

const InputField = ({detail, update, updatePhoneNumber}) => (
    <div>
        {
            <div className={detail.field === 'message' ? 'col-md-12' : 'col-md-6'}>
                <label htmlFor={detail.field}>{detail.label}</label>
                {
                    detail.field === 'message'
                    ?
                    <textarea
                        placeholder={detail.placeHolder}
                        value={detail.value}         
                        rows="8"
                        onChange={(e) => update(detail.field, e.target.value)}
                    />
                    :
                        detail.field !== 'phoneNumber'
                        ?
                        <input
                            id={detail.field} type="text"
                            placeholder={detail.placeHolder}
                            value={detail.value}
                            onChange={(e) => update(detail.field, e.target.value)}
                        />
                        :
                        <IntlTelInput
                            css={['intl-tel-input country-list', '']}
                            utilsScript={'libphonenumber.js'}
                            defaultCountry={'au'}
                            preferredCountries={['au']}
                            onPhoneNumberChange={updatePhoneNumber}
                            value={detail.value}
                        />
                }
            </div>
        }
    </div>
);

class CustomerFeedback extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            details: {
                name: {
                    field: 'name',
                    value: '',
                    label: 'Name',
                    placeHolder: 'John Doe',
                },
                email: {
                    field: 'email',
                    value: '',
                    label: 'Email',
                    placeHolder: 'test@example.com',
                },
                phoneNumber: {
                    field: 'phoneNumber',
                    value: '',
                    label: 'Phone Number',
                    placeHolder: '(02) 9222 3333',
                },
                subject: {
                    field: 'subject',
                    value: '',
                    label: 'Subject',
                    placeHolder: 'What is your question about?'
                },
                message: {
                    field: 'message',
                    value: '',
                    label: 'Message',
                    placeHolder: 'If you can include any details from your account, we will be able to get back to you faster',
                },
            },
            sendButtonClicked: false,
            unsavedChanges: false,
            shouldShowSuccessfulMessage: false,
            sendMessageApiError: null,
        };

        this.updateField = this.updateField.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
        this.showSuccessfulMessage = this.showSuccessfulMessage.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.updatePhoneNumber = this.updatePhoneNumber.bind(this);
    }

    updateField(field, value) {
        let detail = this.state.details[field];
        detail = Object.assign({}, detail, { value });

        this.setState({
            details: Object.assign({}, this.state.details, { [field]: detail }),
            unsavedChanges: true,
        });
    }

    showSuccessfulMessage() {
        this.setState({
            shouldShowSuccessfulMessage: true,
            sendMessageApiError: null,
        });
    }

    sendMessage() {
        const { sendMessage } = this.props;
        const { details } = this.state;
        const payload = {
            customerName: details.name.value.trim(),
            customerEmail: details.email.value.trim(),
            customerPhoneNumber: details.phoneNumber.value.replace(/\s+/g, ''),
            customerSubject: details.subject.value.trim(),
            customerMessage: details.message.value.trim(),
        };

        this.setState({
            sendButtonClicked: true,
        });

        sendMessage(
            payload,
            () => {
                this.showSuccessfulMessage();
                this.setState({ sendButtonClicked: false });
            },
            (apiError) => {
                this.setState({
                    sendMessageApiError: apiError,
                    sendButtonClicked: false,
                });
            },
        );
    }

    closeModal() {
        this.setState({ shouldShowSuccessfulMessage: false });
    }

    updatePhoneNumber(status, value, countryData, number, id) {
        let detail = this.state.details.phoneNumber;
        detail = Object.assign({}, detail, { value: number && number.trim() });

        this.setState({
            details: Object.assign({}, this.state.details, { phoneNumber: detail }),
            unsavedChanges: true,
        });
    }

    render() {
        const {
            details, sendButtonClicked, unsavedChanges,
            shouldShowSuccessfulMessage, sendMessageApiError,
        } = this.state;
        return (
            <div className="customer-feedback-container">
                <h1>Contact</h1>
                <p>
                    Do you need help with anything? Have you got feedback for us? Whatever it is, we would love to hear from you.
                </p>
                <div className="feedback-form-container">
                    <div className="row">
                        <InputField
                            detail={details.name}
                            update={this.updateField}
                        />
                        <InputField
                            detail={details.email}
                            update={this.updateField}                        
                        />                        
                    </div>
                    <div className="row">
                        <InputField
                            detail={details.phoneNumber}
                            updatePhoneNumber={this.updatePhoneNumber}
                        />
                        <InputField
                            detail={details.subject}
                            update={this.updateField}                        
                        />                        
                    </div>
                    <div className="row">
                        <InputField
                            detail={details.message}
                            update={this.updateField}                                                    
                        />
                    </div>
                    <div className="row">
                        <div className="send-message-button-wrapper col-md-12">
                            <button disabled={sendButtonClicked} className="send-message-button" onClick={this.sendMessage}>
                                SEND YOUR MESSAGE
                                <img src={sendButtonClicked ? spinner : null} className={sendButtonClicked ? 'show-spinner' : ''}/>
                            </button>
                        </div>
                    </div>
                    {
                        sendMessageApiError &&
                        <div className="error-message">
                            {sendMessageApiError}
                        </div>
                    }
                    {
                        shouldShowSuccessfulMessage &&
                        <SuccessfulMessageModal
                            closeModal={this.closeModal}
                        />
                    }
                </div>
            </div>
        );
    }
}

export default connect(null, mapPropsToState)(CustomerFeedback);
