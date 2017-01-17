import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const pings = [
  {
    pingId: 1,
    customerId: 1,
    vehicleId: 1,
    inventoryId: 1
  },
  {
    pingId: 2,
    customerId: 2,
    vehicleId: 2,
    inventoryId: 2
  },
  {
    pingId: 3,
    customerId: 3,
    vehicleId: 3,
    inventoryId: 3
  },
  {
    pingId: 4,
    customerId: 4,
    vehicleId: 4,
    inventoryId: 4
  },
  {
    pingId: 5,
    customerId: 5,
    vehicleId: 5,
    inventoryId: 5
  },
  {
    pingId: 6,
    customerId: 6,
    vehicleId: 6,
    inventoryId: 6
  }
];

//This would be performed on the server in a real app. Just stubbing in.
/*const generateId = (ping) => {
 return ping.firstName.toLowerCase() + '-' + ping.lastName.toLowerCase();
 };*/

class PingDetailsApi {

  static getPingDetailsById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, pings.find(ping => ping.pingId == id)));
      }, delay);
    });
  }

}

export default PingDetailsApi;
