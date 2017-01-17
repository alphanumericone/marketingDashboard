import React, {PropTypes} from 'react';

const LabelField = ({name, label, value}) => {
  return (
    <div >
      <label htmlFor={name}>{label}</label>: {value}
    </div>
  );
};


LabelField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};

export default LabelField;
