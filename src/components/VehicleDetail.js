import React, {PropTypes} from 'react';

const VehicleDetail = ({vehicle}) => {
  let style = {"border-style":"solid","border-width":"2px"};
  return (
    <div>
  <h4>Vehicle Detail</h4>
    <ul className="list-group">
      <li className="list-group-item">{vehicle.vehicleId}</li>
      <li className="list-group-item">{vehicle.year}</li>
      <li className="list-group-item">{vehicle.make}</li>
      <li className="list-group-item">{vehicle.model}</li>
    </ul></div>
  );
};

VehicleDetail.propTypes = {
  vehicle: PropTypes.object.isRequired
};

export default VehicleDetail;
