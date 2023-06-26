import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button4 from './Button4';

describe('Button4', () => {
  let props;
  let shallowButton4;
  let renderedButton4;
  let mountedButton4;

  const shallowTestComponent = () => {
    if (!shallowButton4) {
      shallowButton4 = shallow(<Button4 {...props} />);
    }
    return shallowButton4;
  };

  const renderTestComponent = () => {
    if (!renderedButton4) {
      renderedButton4 = render(<Button4 {...props} />);
    }
    return renderedButton4;
  };

  const mountTestComponent = () => {
    if (!mountedButton4) {
      mountedButton4 = mount(<Button4 {...props} />);
    }
    return mountedButton4;
  };  

  beforeEach(() => {
    props = {};
    shallowButton4 = undefined;
    renderedButton4 = undefined;
    mountedButton4 = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
