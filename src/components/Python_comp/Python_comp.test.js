import React from 'react';
import { shallow } from 'enzyme';
import Python_comp from './Python_comp';

describe('<Python_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Python_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
