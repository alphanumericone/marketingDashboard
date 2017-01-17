import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const vehicles = [
  {
    vehicleId: 1,
    year: 2015,
    make: 'Ford',
    model: 'Escape'
  },
  {
    vehicleId: 2,
    year: 2005,
    make: 'BMW',
    model: '530'
  },
  {
    vehicleId: 3,
    year: 2014,
    make: 'BMW',
    model: '525'
  },
  {
    vehicleId: 4,
    year: 2007,
    make: 'Chevrolet',
    model: 'Corvette'
  },
  {
    vehicleId: 5,
    year: 2014,
    make: 'Jeep',
    model: 'Wrangler'
  },
  {
    vehicleId: 6,
    year: 2002,
    make: 'Saturn',
    model: 'Vue'
  },
];

class VehicleDetailsApi {

  static getVehicleDetailsById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, vehicles.find(vehicle => vehicle.vehicleId == id)));
      }, delay);
    });
  }

}

export default VehicleDetailsApi;
