import {Alert} from 'react-native';

export const displayFavoriteImage = (film, favoritesFilm) => {
  if (
    favoritesFilm !== null &&
    film !== undefined &&
    favoritesFilm.findIndex((item) => item.id === film.id) !== -1
  ) {
    return true;
  }

  return false;
};

export const renderGenreCompanies = (items) => {
  return items
    .map((item) => {
      return item.name;
    })
    .join(' / ');
};

export const alertConnexion = (refresh) => {
  Alert.alert(
    'Merci de vérifier votre connexion internet',
    '',
    [{text: 'OK'}, {text: 'Retry', onPress: () => refresh()}],
    {cancelable: false},
  );
};

export const clickableZone = {top: 20, bottom: 20, left: 20, right: 20};
