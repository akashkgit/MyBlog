import React from 'react';
import { shallow } from 'enzyme';
import Music_comp from './Music_comp';

describe('<Music_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Music_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
