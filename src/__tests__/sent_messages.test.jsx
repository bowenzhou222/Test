import React from 'react';
import { shallow, mount } from 'enzyme';
import { Messages } from '../components/sent_messages/sent_messages_container';

describe("sent messages", () => {
    it("test sent_messages component", () => {
        const user = {
            email: 'mock@email.com',
        };
        const messages = [
            {
                name: 'bowen',
                phoneNumber: '+61455555555',
                email: 'mock@email.com',
                subject: 'subject1',
                message: 'message1',
            },
            {
                name: 'bowen',
                phoneNumber: '+61455555555',
                email: 'mock@email.com',
                subject: 'subject2',
                message: 'message2',
            },
        ];

        const fetchMessages = jest.fn();

        const wrapper = shallow(
            <Messages 
                user={user}
                messages={messages}
                fetchMessages={fetchMessages}
            />
        );

        wrapper.find('.fetch-messages-link').simulate('click');
        expect(wrapper.find('.message-container')).toHaveLength(2);

        wrapper.find('.close-modal-button').simulate('click');
        expect(wrapper.find('.message-container')).toHaveLength(0);
        expect(wrapper.state().isMessageModalOpen).toBeFalsy();
    })
});