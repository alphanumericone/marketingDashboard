import * as types from './actionTypes';
import pingDetailsApi from '../api/mockPingDetailsApi';
//import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPingDetailsSuccess(ping) {
  return { type: types.LOAD_SELECTED_PING_DETAILS_SUCCESS, ping: ping };
}

export function loadCustomerSuccess(customer) {
  return { type: types.LOAD_CUSTOMER_DETAILS_SUCCESS,
    customer: customer };
}

export function loadVehicleSuccess(vehicle) {
  return { type: types.LOAD_VEHICLE_DETAILS_SUCCESS,
    vehicle };
}

export function loadInventorySuccess(inventory) {
  return { type: types.LOAD_INVENTORY_DETAILS_SUCCESS,
    inventory };
}

export function loadSelectedPingDetails(pingId) {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return pingDetailsApi.getPingById(pingId).then(ping => {
      dispatch(loadPingDetailsSuccess(ping));
    }).catch(error => {
      throw(error);
    });
  };
}
