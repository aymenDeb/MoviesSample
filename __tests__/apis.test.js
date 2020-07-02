import fetchMock from 'jest-fetch-mock';
import {getBestFilms, getSearchedFilms, getFilmWithId} from '../src/api/Api';
import {films_data, film_by_id} from '../__mocks__/mockData/MockData';
fetchMock.enableMocks();

beforeEach(() => {
  fetch.resetMocks();
});

it('get Last films success', async () => {
  fetch.mockResponseOnce(JSON.stringify(films_data));
  const films = await getBestFilms(1);
  expect(films).toEqual(films);
  expect(films.results.length).toEqual(2);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('get Last films error', async () => {
  fetch.mockReject(() => Promise.reject('API failled'));
  const films = await getBestFilms(1);
  expect(films).toEqual(undefined);
});

it('get searched films success', async () => {
  fetch.mockResponseOnce(JSON.stringify(films_data));
  const films = await getSearchedFilms('joker', 1);
  expect(films).toEqual(films);
  expect(films.results.length).toEqual(2);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('get searched films error', async () => {
  fetch.mockReject(() => Promise.reject('API failled'));
  const films = await getSearchedFilms('joker', 1);
  expect(films).toEqual(undefined);
});

it('get film by id success', async () => {
  fetch.mockResponseOnce(JSON.stringify(film_by_id));
  const films = await getFilmWithId(345940);
  expect(films).toEqual(films);
  expect(fetch).toHaveBeenCalledTimes(1);
});

it('get film by id error', async () => {
  fetch.mockReject(() => Promise.reject('API failled'));
  const films = await getFilmWithId(345940);
  expect(films).toEqual(undefined);
});
