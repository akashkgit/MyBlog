import React from 'react';
import { shallow } from 'enzyme';
import Author from './Author';

describe('<Author />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Author />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
