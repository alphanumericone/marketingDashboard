import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const pings = [
  {
    id: 1,
    firstName: 'Rachel',
    lastName: 'Anderson',
    pingScore: 8.1,
    vehicleDescription: '2015 Ford Escape'
  },
  {
    id: 2,
    firstName: 'John',
    lastName: 'Gibbs',
    pingScore: 5.1,
    vehicleDescription: '2005 BMW 530'
  },
  {
    id: 3,
    firstName: 'Tara',
    lastName: 'Turkzadeh',
    pingScore: 9.1,
    vehicleDescription: '2014 BMW 525'
  },
  {
    id: 4,
    firstName: 'James',
    lastName: 'Corvino',
    pingScore: 8.3,
    vehicleDescription: '2007 Chevrolet Corvette'
  },
  {
    id: 5,
    firstName: 'Sapna',
    lastName: 'Bogale',
    pingScore: 8.4,
    vehicleDescription: '2014 Jeep Wrangler'
  },
  {
    id: 6,
    firstName: 'Aaron',
    lastName: 'McBride',
    pingScore: 8.5,
    vehicleDescription: '2002 Saturn Vue'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
/*const generateId = (ping) => {
  return ping.firstName.toLowerCase() + '-' + ping.lastName.toLowerCase();
};*/

class PingApi {
  static getAllPings() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], pings));
      }, delay);
    });
  }

  static getPingById(id) {
    console.log('ping api - getby id');
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, pings.find(ping => ping.id == id)));
      }, delay);
    });
  }

}

export default PingApi;
