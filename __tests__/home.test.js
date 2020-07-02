import React from 'react';
import Home from '../src/components/home/Home';
import {shallow} from 'enzyme';
import WishListReducer from '../src/reducers/WishListReducer';
import ConnectComponent from '../__mocks__/connectComponent';

describe('Test sur Home', () => {
  it('render composant connecté', () => {
    const component = shallow(
      <ConnectComponent>
        <Home />
      </ConnectComponent>,
    );
    expect(component).toMatchSnapshot();
  });
  it('Test le reducer sans action type', () => {
    const initial_state = {favoritesFilm: []};
    expect(WishListReducer(initial_state, {}).favoritesFilm).toEqual([]);
  });
});
