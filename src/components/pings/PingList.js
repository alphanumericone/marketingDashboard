import React, {PropTypes} from 'react';
import Profile from '../profile/Profile';
import PingListItem from './PingListItem';

const PingList = ({pings, selected, selectedPingId}) => {
  function onSelect(pingId) {
    console.log('ping list - selected');
    selected(pingId);
  }
  return (
    <div className="master-list-container">
      {pings.map(ping =>
        <div key={ping.id} className={selectedPingId == ping.id ? 'ws-master-list-item active' : 'ws-master-list-item'} onClick={onSelect.bind(this,ping.id)}>
          <Profile text={ping.pingScore.toString()} />
          <PingListItem ping={ping}/>
        </div>
      )}
    </div>
  );
};

PingList.propTypes = {
  pings: PropTypes.array.isRequired,
  selected: PropTypes.func,
  selectedPingId: PropTypes.number
};

export default PingList;
