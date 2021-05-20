import React from 'react';
import { shallow } from 'enzyme';
import Java_comp from './Java_comp';

describe('<Java_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Java_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
