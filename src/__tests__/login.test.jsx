import React from 'react';
import { shallow, mount } from 'enzyme';
import { Login } from '../components/login/login_container';
import { Messages } from '../components/sent_messages/sent_messages_container';

describe('login', () => {
    it("test component ui", () => {
        const wrapper = shallow(
            <Login />
        )
        expect(wrapper.state()).toEqual({
            isLoginFormOpen: false,
            isRegisterFormOpen: false,
            email: '',
            password: '',
            loginButtonClicked: false,
            loginError: null,
            registerButtonClicked: false,
            registerError: null,
        });

        const openRegisterFormLink = wrapper.find('.open-register-form-link')
        const openLoginFormLink = wrapper.find('.open-login-form-link')        
        expect(openRegisterFormLink).toHaveLength(1);
        expect(openLoginFormLink).toHaveLength(1);
        expect(wrapper.find(Messages)).toHaveLength(0);

        openRegisterFormLink.simulate('click');
        expect(wrapper.state().isRegisterFormOpen).toBeTruthy();
        openLoginFormLink.simulate('click');
        expect(wrapper.state().isLoginFormOpen).toBeTruthy();   
    })
    
    it("test register", () => {
        const mockRegister = jest.fn();
        const success = jest.fn();
        const fail = jest.fn();
        const register = (payload, success, fail) => {
            mockRegister(payload);
            success();
            fail();
        }

        const wrapper = shallow(
            <Login
                register={register}
            />
        );

        wrapper.find('.open-register-form-link').simulate('click');
        expect(wrapper.state().isRegisterFormOpen).toBeTruthy()
        wrapper.find('.action-button').simulate('click');
        expect(wrapper.state().isRegisterFormOpen).toBeFalsy()
        expect(wrapper.state().registerButtonClicked).toBeFalsy();
    })

    it("test login", () => {
        const mockLogin = jest.fn();
        const success = jest.fn();
        const fail = jest.fn();
        const login = (payload, success, fail) => {
            mockLogin(payload);
            success();
            fail();
        }

        const wrapper = shallow(
            <Login
                login={login}
            />
        );

        wrapper.find('.open-login-form-link').simulate('click');
        expect(wrapper.state().isLoginFormOpen).toBeTruthy()
        wrapper.find('.action-button').simulate('click');
        expect(wrapper.state().isLoginFormOpen).toBeFalsy()
        expect(wrapper.state().loginButtonClicked).toBeFalsy();
    })
})