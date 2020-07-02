import {API_KEY} from '../constants/constant';

export function getSearchedFilms(query, page, setNetworkStatus = null) {
  const url =
    'https://api.themoviedb.org/3/search/movie?api_key=' +
    API_KEY +
    '&query=' +
    query +
    '&page=' +
    page;
  return fetch(url)
    .then((response) => {
      if (setNetworkStatus) {
        setNetworkStatus(true);
      }
      return response.json();
    })
    .catch((error) => {
      if (
        error.message === 'Timeout' ||
        error.message === 'Network request failed'
      ) {
        if (setNetworkStatus) {
          setNetworkStatus(false);
        }
      } else {
        console.error(error);
      }
    });
}

export function getFilmWithId(id, setNetworkStatus = null) {
  return fetch(
    'https://api.themoviedb.org/3/movie/' + id + '?api_key=' + API_KEY,
  )
    .then((response) => {
      if (setNetworkStatus) {
        setNetworkStatus(true);
      }
      return response.json();
    })
    .catch((error) => {
      if (
        error.message === 'Timeout' ||
        error.message === 'Network request failed'
      ) {
        if (setNetworkStatus) {
          setNetworkStatus(false);
        }
      } else {
        console.error(error);
      }
    });
}

export function getBestFilms(page, setNetworkStatus = null) {
  return fetch(
    'https://api.themoviedb.org/3/discover/movie?api_key=' +
      API_KEY +
      '&vote_count.gte=1000&sort_by=release_date.desc&page=' +
      page,
  )
    .then((response) => {
      if (setNetworkStatus) {
        setNetworkStatus(true);
      }
      return response.json();
    })
    .catch((error) => {
      if (
        error.message === 'Timeout' ||
        error.message === 'Network request failed'
      ) {
        if (setNetworkStatus) {
          setNetworkStatus(false);
        }
      } else {
        console.error(error);
      }
    });
}
