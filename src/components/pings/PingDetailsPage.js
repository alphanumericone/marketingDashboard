import React from 'react';
import {connect} from 'react-redux';
import * as pingActions from '../../actions/pingActions';
import CustomerDetail from '../CustomerDetail';
import VehicleDetail from '../VehicleDetail';
import InventoryDetail from '../InventoryDetail';
import {bindActionCreators} from 'redux';

class PingDetailsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  /*componentWillReceiveProps(nextProps) {
   console.log('ping details - '+nextProps.ping.id + ' - ' + nextProps.ping.selectedPing);
   console.log('ping details - '+this.props.toString());
   if (this.props.ping.id != nextProps.ping.id) {
   this.setState({ping: Object.assign({}, nextProps.ping)});
   }
   }*/

  render() {
    const {ping, customer, inventory, vehicle} = this.props;
    if (Object.keys(customer).length > 0) {
      return (
        <div>
          <div className="detail-view-header">
            <div className="ws-action-bar">
              <h1 className="detail-view-title ws-non-action-item grow">Ping Details</h1>

              <div className="ws-action-spacer"/>
              <div className="ws-action-item-right">
                Phone Script
              </div>
              <div className="ws-action-item-right">
                Print
              </div>
              <div className="ws-dots ws-action-item-right"><i className="fa fa-ellipsis-h"/>

                {/*<div className="ws-action-menu">
                 <div className="ws-action-menu-content">
                 <div className="ws-action-menu-item">
                 <i className="fa fa-fw fa-car"></i> Item 1
                 </div>
                 <div className="ws-action-menu-item">Item 2</div>
                 </div>
                 </div>*/}
              </div>
              <div className="btn ws-primary-action">Create Opportunity</div>
            </div>
          </div>
          <div className="customer-summary-bar">
            <div className="customer-summary-item">
              <i className="fa fa-phone"/> Calls
              11 / 50
            </div>
            <div className="customer-summary-item">
              <i className="fa fa-calendar"/> Appts Created
              20/24
            </div>
            <div className="customer-summary-item">
              <i className="fa fa-calendar-check-o"/> Appts Shown
              18/20
            </div>
            <div className="customer-summary-item">
              <i className="fa fa-check-circle"/> Sold
              18/12
            </div>
          </div>

          <section className="ws-panel">
            <div className="panel">

              <CustomerDetail customer={customer ? customer : null}/>
              <div className="panel panel-body col-lg-12">
                <VehicleDetail vehicle={vehicle ? vehicle : null}/>
                <InventoryDetail inventory={inventory ? inventory : null}/>

              </div>
            </div>
          </section>
          {/*<CustomerDetail customer={{customerId: 1, firstName: 'James', lastName: 'Corvino'}} />
           <InventoryDetail inventory={{inventoryId: 1, year: 2006, make: 'Chevrolet', model: 'Corvette'}} />
           <VehicleDetail vehicle={{vehicleId: 1, year: 2012, make: 'Chevrolet', model: 'Corvette'}} />*/}
        </div>
      );
    }
    else {
      return <div />
    }
  }

}

PingDetailsPage.propTypes = {
  //pingId: React.PropTypes.number.isRequired,
  ping: React.PropTypes.object.isRequired,
  customer: React.PropTypes.object.isRequired,
  inventory: React.PropTypes.object,
  vehicle: React.PropTypes.object
};

function mapStateToProps(state) {
  return {
    customer: state.pingDetails.customer,
    inventory: state.pingDetails.inventory,
    vehicle: state.pingDetails.vehicle
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PingDetailsPage);
