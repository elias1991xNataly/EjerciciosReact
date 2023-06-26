import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button2 from './Button2';

describe('Button2', () => {
  let props;
  let shallowButton2;
  let renderedButton2;
  let mountedButton2;

  const shallowTestComponent = () => {
    if (!shallowButton2) {
      shallowButton2 = shallow(<Button2 {...props} />);
    }
    return shallowButton2;
  };

  const renderTestComponent = () => {
    if (!renderedButton2) {
      renderedButton2 = render(<Button2 {...props} />);
    }
    return renderedButton2;
  };

  const mountTestComponent = () => {
    if (!mountedButton2) {
      mountedButton2 = mount(<Button2 {...props} />);
    }
    return mountedButton2;
  };  

  beforeEach(() => {
    props = {};
    shallowButton2 = undefined;
    renderedButton2 = undefined;
    mountedButton2 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
