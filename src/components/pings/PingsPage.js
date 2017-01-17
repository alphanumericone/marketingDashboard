import React from 'react';
import {connect} from 'react-redux';
import * as pingActions from '../../actions/pingActions';
import PingList from './PingList';
import PingDetailsPage from './PingDetailsPage';
import {bindActionCreators} from 'redux';

class PingsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.selectPing = this.selectPing.bind(this);
  }

  selectPing(pingId) {
    console.log('pings page - selected');
    this.props.actions.loadPing(pingId);
  }

  render() {
    const {pings, selectedPingId, pingDetails} = this.props;

    return (
      <div>
        <h1>Pings Page</h1>
        <div className="ws-absolute-fill ws-flex-container ng-scope">

          <div className="ws-flex-auto-size ws-search-directive-min-width master-list">
            <div className="master-list-content">
              <div className="panel panel-compact master-list-controls">
                <div className="panel-heading">
                  <h3>My Pings</h3>
                </div>
              </div>
              <PingList pings={pings} selected={this.selectPing} selectedPingId={selectedPingId}/>
            </div>
          </div>
          <span className="app-content-body ws-flex-columns ws-flex-fill-even">
            <PingDetailsPage ping={pingDetails ? pingDetails: null} />
          </span>
        </div>
      </div>
    );
  }
}

PingsPage.propTypes = {
  pings: React.PropTypes.array.isRequired,
  selectedPingId: React.PropTypes.number,
  pingDetails: React.PropTypes.object,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    pings: state.ping.pings,
    pingDetails: state.ping.pingDetails,
    selectedPingId: state.ping.selectedPingId
  };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(pingActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PingsPage);
//export default connect(mapStateToProps)(PingsPage);
