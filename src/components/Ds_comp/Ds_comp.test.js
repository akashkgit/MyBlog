import React from 'react';
import { shallow } from 'enzyme';
import Ds_comp from './Ds_comp';

describe('<Ds_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Ds_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
