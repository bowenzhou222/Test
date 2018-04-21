import React from 'react';
import spinner from '../../assets/images/spinner.png';

const InputField = ({detail, update}) => (
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
                    <input
                        id={detail.field} type="text"
                        placeholder={detail.placeHolder}
                        value={detail.value}
                        onChange={(e) => update(detail.field, e.target.value)}
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
        };

        this.updateField = this.updateField.bind(this);
        this.sendMessage = this.sendMessage.bind(this);
    }

    updateField(field, value) {
        let detail = this.state.details[field];
        detail = Object.assign({}, detail, { value });

        this.setState({
            details: Object.assign({}, this.state.details, { [field]: detail }),
            unsavedChanges: true,
        });
    }

    sendMessage() {
        this.setState({
            sendButtonClicked: true,
        });
        console.log('clicked')
    }

    render() {
        const { details, sendButtonClicked, unsavedChanges } = this.state;
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
                            update={this.updateField}
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

                </div>
            </div>
        );
    }
}

export default CustomerFeedback;
