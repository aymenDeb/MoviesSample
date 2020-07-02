import {combineReducers} from 'redux';
import WishListReducer from './WishListReducer';
import NetworkReducer from './NetworkReducer';

export default combineReducers({
  films: WishListReducer,
  network: NetworkReducer,
});
