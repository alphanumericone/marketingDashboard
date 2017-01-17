import React, {PropTypes} from 'react';

const Profile = ({text}) => {

  return (
    <div className="contact-image-donut-50">
      <div className="contact-image-donut">
        <div className="contact-image">
          <div className="contact-initials">{text}</div>
        </div>
      </div>
    </div>
  );
};

Profile.propTypes = {
  text: PropTypes.string.isRequired
};

export default Profile;
