import {SET_NET_STATUS} from '../actions/types';

const INITIAL_STATE = {isConnected: true};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_NET_STATUS: {
      return {
        ...state,
        isConnected: action.payload,
      };
    }
    default:
      return state;
  }
};
