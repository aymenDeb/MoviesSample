import {SET_NET_STATUS} from './types';

export const setNetworkStatus = (status) => {
  return (dispatch) => {
    dispatch({type: SET_NET_STATUS, payload: status});
  };
};
