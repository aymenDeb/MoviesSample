import {ADD_FILM_LIST, GET_LIST_FILM} from './types';
import AsyncStorage from '@react-native-community/async-storage';

export const toggleFavorite = (film) => {
  return (dispatch) => {
    AsyncStorage.getItem('favorites').then((response) => {
      let films = [];
      if (response) {
        films = JSON.parse(response);
        let filmId = films.findIndex((item) => item.id === film.id);

        if (filmId !== -1) {
          films = films.filter((item, index) => index !== filmId);
        } else {
          films.push(film);
        }
      } else {
        films.push(film);
      }

      AsyncStorage.setItem('favorites', JSON.stringify(films)).then(() => {
        dispatch({type: ADD_FILM_LIST, payload: films});
      });
    });
  };
};

export const getFavoriteList = () => {
  return (dispatch) => {
    AsyncStorage.getItem('favorites').then((response) => {
      dispatch({type: GET_LIST_FILM, payload: JSON.parse(response)});
    });
  };
};
