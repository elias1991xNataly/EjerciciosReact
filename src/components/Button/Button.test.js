import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from './Button';

describe('Button', () => {
  let props;
  let shallowButton;
  let renderedButton;
  let mountedButton;

  const shallowTestComponent = () => {
    if (!shallowButton) {
      shallowButton = shallow(<Button {...props} />);
    }
    return shallowButton;
  };

  const renderTestComponent = () => {
    if (!renderedButton) {
      renderedButton = render(<Button {...props} />);
    }
    return renderedButton;
  };

  const mountTestComponent = () => {
    if (!mountedButton) {
      mountedButton = mount(<Button {...props} />);
    }
    return mountedButton;
  };  

  beforeEach(() => {
    props = {};
    shallowButton = undefined;
    renderedButton = undefined;
    mountedButton = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
