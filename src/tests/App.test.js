import React from 'react';
import ReactDOM from 'react-dom';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { expect } from 'chai';
import { mount, shallow } from 'enzyme';

import App from '../App';
import Header from '../Components/Header';
import Profile from '../Components/Profile';
import Avatar from '../Components/Avatar';

Enzyme.configure({ adapter: new Adapter() });

describe('GitHub <App/>', () => {
  it('complete app renders without crashing', () => {
    const div = window.document.createElement('div');
    ReactDOM.render(<App />, div);
  });

  it('checks the initial header text', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Header).props().caption).to.equal('Github Profile');
  });

  it('allows us to set props', () => {
    const wrapper = mount(<Header />);
    wrapper.setProps({ caption: 'caption test' });
    expect(wrapper.props().caption).to.equal('caption test');
  });

  it('check default/initial state of the profile', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find(Profile).text()).to.equal('loading...');
  });

  it('avatar should have an image to display the gravatar', () => {
    const wrapper = shallow(<Avatar />);
    expect(wrapper.find('img').length).to.equal(1);
  });

  /**
   * this works with class-based-components
   */
  it('change the profile loading state', () => {
    // const wrapper = mount(<Profile />);
    // wrapper.setState({ loading: false });
    // expect(wrapper.text()).to.not.equal('loading...');
  });
});
