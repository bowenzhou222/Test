import React from 'react';
import { shallow, mount } from 'enzyme';
import Navbar from '../components/navbar';

describe('navbar', () => {
    const wrapper = shallow(
        <Navbar />
    )
    it("test component ui", () => {

        expect(wrapper.state()).toEqual({ isNavbarOpen: false });
        expect(wrapper.find('a').first().prop('href')).toEqual('https://www.cammy.com/au/');
        expect(wrapper.find('.navbar-help-links').find('a')).toHaveLength(5);
    })

    it("test toggle button", () => {
        const navbarToggleButton = wrapper.find('.navbar-toggle-button')
        expect(navbarToggleButton).toHaveLength(1);
        expect(navbarToggleButton.props().onClick).toBeTruthy();
        navbarToggleButton.simulate('click');
        expect(wrapper.state()).toEqual({ isNavbarOpen: true });
        navbarToggleButton.simulate('click');
        expect(wrapper.state()).toEqual({ isNavbarOpen: false });
    })
})