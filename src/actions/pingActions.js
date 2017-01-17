import * as types from './actionTypes';
import pingsApi from '../api/mockPingsApi';
import pingDetailsApi from '../api/mockPingDetailsApi';
import customerDetailsApi from '../api/mockCustomerDetailsApi';
import vehicleDetailsApi from '../api/mockVehicleDetailsApi';
import inventoryDetailsApi from '../api/mockInventoryDetailsApi';
//import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadPingsSuccess(pings) {
  return { type: types.LOAD_PINGS_SUCCESS, pings: pings };
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

export function loadPings() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return pingsApi.getAllPings().then(pings => {
      //loadPing(pings[0].id);
      dispatch(loadPingsSuccess(pings));
    }).catch(error => {
      throw(error);
    });
  };
}

export function loadSelectedPingSuccess(ping) {
  return { type: types.LOAD_SELECTED_PING_DETAILS_SUCCESS,
    selectedPingId: ping.pingId, pingDetails: ping };
}

export function loadPing(pingId) {
  console.log('ping action - loaded');
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return pingDetailsApi.getPingDetailsById(pingId)
      .then(ping => {
        dispatch(loadSelectedPingSuccess(ping));

        customerDetailsApi.getCustomerDetailsById(ping.customerId)
          .then(customer => {
            dispatch(loadCustomerSuccess(customer));
          });
        vehicleDetailsApi.getVehicleDetailsById(ping.vehicleId)
          .then(vehicle => {
            dispatch(loadVehicleSuccess(vehicle));
          });
        inventoryDetailsApi.getInventoryDetailsById(ping.inventoryId)
          .then(vehicle => {
            dispatch(loadInventorySuccess(vehicle));
          });
        })
      .catch(error => {
        throw(error);
        });
  };
}
