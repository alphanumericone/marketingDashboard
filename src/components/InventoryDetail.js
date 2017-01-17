import React, {PropTypes} from 'react';

const InventoryDetail = ({inventory}) => {
  return (
    <section>
      <h4>Inventory Detail</h4>
      <div>{inventory.inventoryId}</div>
      <div>{inventory.year}</div>
      <div>{inventory.make}</div>
      <div>{inventory.model}</div>
    </section>
  );
};

InventoryDetail.propTypes = {
  inventory: PropTypes.object.isRequired
};

export default InventoryDetail;
