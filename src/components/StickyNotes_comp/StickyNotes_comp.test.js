import React from 'react';
import { shallow } from 'enzyme';
import StickyNotes_comp from './StickyNotes_comp';

describe('<StickyNotes_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<StickyNotes_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
