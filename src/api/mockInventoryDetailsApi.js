import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const vehicles = [
  {
    inventoryId: 1,
    year: 2017,
    make: 'Ford',
    model: 'Escape'
  },
  {
    inventoryId: 2,
    year: 2015,
    make: 'BMW',
    model: '530'
  },
  {
    inventoryId: 3,
    year: 2017,
    make: 'BMW',
    model: '525'
  },
  {
    inventoryId: 4,
    year: 2017,
    make: 'Chevrolet',
    model: 'Corvette'
  },
  {
    inventoryId: 5,
    year: 2017,
    make: 'Jeep',
    model: 'Wrangler'
  },
  {
    inventoryId: 6,
    year: 2012,
    make: 'Saturn',
    model: 'Vue'
  },
];

class InventoryDetailsApi {

  static getInventoryDetailsById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, vehicles.find(vehicle => vehicle.inventoryId == id)));
      }, delay);
    });
  }

}

export default InventoryDetailsApi;
