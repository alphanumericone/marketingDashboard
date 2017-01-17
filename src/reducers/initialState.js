export default {
  ping: {
    pings: [],
    selectedPingId: null,
    pingDetails: {
      pingId: null,
      customerId: null,
      vehicleId: null,
      inventoryId: null
    }
  },
  pingDetails: {
    customer: {},
    vehicle: null,
    inventory: null
  },
  ajaxCallsInProgress: 0
};
