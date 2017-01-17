import React, {PropTypes} from 'react';

const PingListItem = ({ping}) => {
  return (
    <div className="ws-master-list-text-wrapper">
      <h4 className="ws-master-list-item-heading">{ping.firstName} {ping.lastName}</h4>
      {/*<p>{ping.id}</p>*/}
      <p className="ws-ellipsis">{ping.vehicleDescription}</p>
    </div>
  );
};

PingListItem.propTypes = {
  ping: PropTypes.object.isRequired
};

export default PingListItem;
