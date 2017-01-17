import delay from './delay';

// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const customers = [
  {
    customerId: 1,
    firstName: 'Rachel',
    lastName: 'Anderson',
    mobileNumber: '1234567890',
    workNumber: '0987654321',
    homeNumber: '5678901234',
    email: 'randerson@dealersocket.com',
    address: '123 Dealersocket Ave',
    city: 'Dana Point',
    state: 'CA',
    zip: '92671',
    customerValue: 8.1,
    purchaseHistory: '2 Vehicles / $32,908 avg',
    lastPurchase: '20140129',
    service: '23 visits',
    lastService: '20161010',
    avgService: '$208 visit / $2398 yr',
    lastSalesperson: 'Brandon Moss'
  },
  {
    customerId: 2,
    firstName: 'John',
    lastName: 'Gibbs',
    mobileNumber: '1234567890',
    workNumber: '0987654321',
    homeNumber: '5678901234',
    email: 'randerson@dealersocket.com',
    address: '234 Dealerfire Ave',
    city: 'Dont Ask Vil',
    state: 'CA',
    zip: '000000',
    customerValue: 5.1,
    purchaseHistory: '2 Vehicles / $32,908 avg',
    lastPurchase: '20140129',
    service: '23 visits',
    lastService: '20161010',
    avgService: '$208 visit / $2398 yr',
    lastSalesperson: 'Brandon Moss'
  },
  {
    customerId: 3,
    firstName: 'Tara',
    lastName: 'Turkzadeh',
    mobileNumber: '1234567890',
    workNumber: '0987654321',
    homeNumber: '5678901234',
    email: 'randerson@dealersocket.com',
    address: '123 Lake Forest',
    city: 'Lake Forest',
    state: 'CA',
    zip: '92333',
    customerValue: 9.1,
    purchaseHistory: '2 Vehicles / $32,908 avg',
    lastPurchase: '20140129',
    service: '23 visits',
    lastService: '20161010',
    avgService: '$208 visit / $2398 yr',
    lastSalesperson: 'Brandon Moss'
  },
  {
    customerId: 4,
    firstName: 'James',
    lastName: 'Corvino',
    mobileNumber: '1234567890',
    workNumber: '0987654321',
    homeNumber: '5678901234',
    email: 'randerson@dealersocket.com',
    address: '123 Movn Up',
    city: 'Points Unknown',
    state: 'CA',
    zip: '92671',
    customerValue: 8.3,
    purchaseHistory: '2 Vehicles / $32,908 avg',
    lastPurchase: '20140129',
    service: '23 visits',
    lastService: '20161010',
    avgService: '$208 visit / $2398 yr',
    lastSalesperson: 'Brandon Moss'
  },
  {
    customerId: 5,
    firstName: 'Sapna',
    lastName: 'Bogale',
    mobileNumber: '1234567890',
    workNumber: '0987654321',
    homeNumber: '5678901234',
    email: 'randerson@dealersocket.com',
    address: '123 Winner Drive',
    city: 'Dana Point',
    state: 'CA',
    zip: '92671',
    customerValue: 8.4,
    purchaseHistory: '2 Vehicles / $32,908 avg',
    lastPurchase: '20140129',
    service: '23 visits',
    lastService: '20161010',
    avgService: '$208 visit / $2398 yr',
    lastSalesperson: 'Brandon Moss'
  },
  {
    customerId: 6,
    firstName: 'Aaron',
    lastName: 'McBride',
    mobileNumber: '1234567890',
    workNumber: '0987654321',
    homeNumber: '5678901234',
    email: 'randerson@dealersocket.com',
    address: '123 Dealersocket Ave',
    city: 'Dana Point',
    state: 'CA',
    zip: '92671',
    customerValue: 8.5,
    purchaseHistory: '2 Vehicles / $32,908 avg',
    lastPurchase: '20140129',
    service: '23 visits',
    lastService: '20161010',
    avgService: '$208 visit / $2398 yr',
    lastSalesperson: 'Brandon Moss'
  }
];

//This would be performed on the server in a real app. Just stubbing in.
/*const generateId = (ping) => {
 return ping.firstName.toLowerCase() + '-' + ping.lastName.toLowerCase();
 };*/

class CustomerDetailsApi {

  static getCustomerDetailsById(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, customers.find(customer => customer.customerId == id)));
      }, delay);
    });
  }

}

export default CustomerDetailsApi;
