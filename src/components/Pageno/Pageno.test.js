import React from 'react';
import { shallow } from 'enzyme';
import Pageno from './Pageno';

describe('<Pageno />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Pageno />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
