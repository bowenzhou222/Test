import React from 'react';
import { shallow, mount } from 'enzyme';
import {
    CustomerFeedback,
    SuccessfulMessageModal,
    InputField,
} from '../components/customer_feedback/customer_feedback_container';

describe('customer feedback', () => {
    it("test component ui", () => {
        const wrapper = shallow(
            <CustomerFeedback />
        )
        expect(wrapper.state()).toEqual({
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
        });

        expect(wrapper.find(InputField)).toHaveLength(Object.keys(wrapper.state().details).length);
        expect(wrapper.find(SuccessfulMessageModal)).toHaveLength(0);
    })
    
    it("test send message", () => {
        const sendMessage = jest.fn();
        
        const wrapper = shallow(
            <CustomerFeedback
                sendMessage={sendMessage}
            />
        );

        wrapper.find('.send-message-button').simulate('click');
        expect(sendMessage).toBeCalled();
    })
})