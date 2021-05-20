import React from 'react';
import { shallow } from 'enzyme';
import Project_comp from './Project_comp';

describe('<Project_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Project_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
