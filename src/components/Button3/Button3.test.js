import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button3 from './Button3';

describe('Button3', () => {
  let props;
  let shallowButton3;
  let renderedButton3;
  let mountedButton3;

  const shallowTestComponent = () => {
    if (!shallowButton3) {
      shallowButton3 = shallow(<Button3 {...props} />);
    }
    return shallowButton3;
  };

  const renderTestComponent = () => {
    if (!renderedButton3) {
      renderedButton3 = render(<Button3 {...props} />);
    }
    return renderedButton3;
  };

  const mountTestComponent = () => {
    if (!mountedButton3) {
      mountedButton3 = mount(<Button3 {...props} />);
    }
    return mountedButton3;
  };  

  beforeEach(() => {
    props = {};
    shallowButton3 = undefined;
    renderedButton3 = undefined;
    mountedButton3 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
