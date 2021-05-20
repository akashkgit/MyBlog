import React from 'react';
import { shallow } from 'enzyme';
import C_comp from './C_comp';

describe('<C_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<C_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
