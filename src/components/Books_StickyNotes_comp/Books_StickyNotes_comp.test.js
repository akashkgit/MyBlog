import React from 'react';
import { shallow } from 'enzyme';
import Books_StickyNotes_comp from './Books_StickyNotes_comp';

describe('<Books_StickyNotes_comp />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<Books_StickyNotes_comp />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
