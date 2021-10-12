import React from 'react';
import { shallow } from 'enzyme';
import Comment from './Comment';

describe('<Comment />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Comment />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
