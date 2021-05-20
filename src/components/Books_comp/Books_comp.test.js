import React from 'react';
import { shallow } from 'enzyme';
import Books_comp from './Books_comp';

describe('<Books_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Books_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
