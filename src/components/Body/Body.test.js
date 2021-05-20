import React from 'react';
import { shallow } from 'enzyme';
import Body from './Body';

describe('<Body />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Body />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
