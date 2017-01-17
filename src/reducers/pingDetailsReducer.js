import * as types from '../actions/actionTypes';
import initialState from "./initialState";

export default function pingDetailsReducer(state = initialState.pingDetails, action) {
  switch(action.type) {

    case types.LOAD_CUSTOMER_DETAILS_SUCCESS:
      return Object.assign({}, state, {customer : action.customer});

    case types.LOAD_VEHICLE_DETAILS_SUCCESS:
      return Object.assign({}, state, {vehicle : action.vehicle});

    case types.LOAD_INVENTORY_DETAILS_SUCCESS:
      return Object.assign({}, state, {inventory : action.inventory});

    default:
      return state;
  }
}
