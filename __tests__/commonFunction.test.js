import {renderGenreCompanies} from '../src/constants/commonFunctions';
import {genres} from '../__mocks__/mockData/MockData';

describe('Film component', () => {
  it('render genres', () => {
    expect(renderGenreCompanies(genres)).toEqual(
      'Action / Science-Fiction / Horreur',
    );
  });
});
