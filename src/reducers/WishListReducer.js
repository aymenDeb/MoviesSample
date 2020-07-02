import {ADD_FILM_LIST, GET_LIST_FILM} from '../actions/types';

const INITIAL_STATE = {favoritesFilm: []};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FILM_LIST: {
      return {
        ...state,
        favoritesFilm: action.payload,
      };
    }
    case GET_LIST_FILM: {
      return {
        ...state,
        favoritesFilm: action.payload,
      };
    }

    default:
      return state;
  }
};
