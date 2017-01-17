import React, {PropTypes} from 'react';
import Profile from './profile/Profile';
import LabelField from './common/LabelField';

const CustomerDetail = ({customer}) => {
  if (customer) {
    return (
      <div className="panel panel-primary" >

        <div className="panel-media-container">
          <div className="panel-media">
            <Profile text={customer.customerValue.toString()}/>
          </div>
          <div className="panel panel-primary">
            <div className="row">
              <div className="panel-heading col-sm-6">
                <div className="panel-heading-options pull-right">
                  <div className="customer-id">
                    Customer ID: { customer.customerId }
                  </div>
                </div>
                <h3 className="panel-title"> { customer.firstName } { customer.lastName }</h3>
                <ul className="panel-title-details list-group">
                  <li className="list-group-item long-details">On vacation 6/2 - 6/9, do not call until 6/11. Call
                    after 5pm.
                  </li>
                </ul>
                <div className="panel-body customer-summary-info">
                  <div className="row">
                    <div className="col-sm-4">
                      <ul className="list-group">
                        <li className="list-group-item">
                          <span className="item-heading">M: </span>
                          {customer.mobileNumber }
                        </li>
                        <li className="list-group-item">
                          <span className="item-heading">H: </span>
                          {customer.homeNumber}
                        </li>
                        <li className="list-group-item invalid">
                          <span className="item-heading">W: </span>
                          {customer.workNumber }
                        </li>
                      </ul>
                    </div>
                    <div className="col-sm-5">
                      <ul className="list-group">
                        <li className="list-group-item selected">
                          { customer.email }
                        </li>
                        <li className="list-group-item">
                          <p className="address-info">{customer.address}</p>
                          <p className="address-info">{customer.city}, {customer.state},{customer.zip}</p>
                        </li>
                      </ul>
                    </div>
                  </div>


                </div>
              </div>

              <div className="col-sm-5">
                  <LabelField name="purchaseHistory" label="Purchased" value={customer.purchaseHistory} />
                  {/*ToDo format date*/}
                  <LabelField name="lastPurchase" label="Last purchase" value={customer.lastPurchase}/>
                  <LabelField name="service" label="Service" value={customer.service}/>
                  {/*ToDo format date*/}
                  <LabelField name="lastService" label="Last Service" value={customer.lastService}/>
                  <LabelField name="serviceSpent" label="Avg Spent" value={customer.avgService}/>
                  <LabelField name="salesPerson" label="Last Salesperson" value={customer.lastSalesperson}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  else {
    return (
      <div />
    );
  }
};


CustomerDetail.propTypes = {
  customer: PropTypes.object.isRequired
};

export default CustomerDetail;

