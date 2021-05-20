import React from 'react';
import { shallow } from 'enzyme';
import Os_comp from './Os_comp';

describe('<Os_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Os_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
