import React from 'react';
import {shallow} from 'enzyme';
import Header from '../src/components/commons/Header';

describe('Header component', () => {
  it('should match to snapshot', () => {
    const component = shallow(<Header />);
    expect(component).toMatchSnapshot();
  });
});
