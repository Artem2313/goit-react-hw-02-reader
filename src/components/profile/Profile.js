/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileDetails from './ProfileDetails';

const Profile = ({ users = [] }) => (
  <>
    {users.map(user => (
      <Fragment key={user.id}>
        <ProfileDetails {...user} />
      </Fragment>
    ))}
  </>
);

Profile.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default Profile;
