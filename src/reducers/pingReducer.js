import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function pingReducer(state = initialState.ping, action) {
  switch(action.type) {
    case types.LOAD_PINGS_SUCCESS:
      return Object.assign({}, state, {pings: action.pings});

    case types.LOAD_SELECTED_PING_SUCCESS:
      console.log('ping reducer - selected');
      return Object.assign({}, state, {selectedPingId: action.selectedPingId});

    case types.LOAD_SELECTED_PING_DETAILS_SUCCESS:
      console.log('ping reducer - selected details');
      return Object.assign({}, state, {selectedPingId: action.selectedPingId, pingDetails: action.pingDetails});

    default:
      return state;
  }
}
