/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ProfileDetails from './FriendslistDetails';
import classes from './Friendslist.module.css';

const FriendsList = ({ friends = [] }) => (
  <ul className={classes.friendlist}>
    {friends.map(friend => (
      <Fragment key={friend.id}>
        <ProfileDetails {...friend} />
      </Fragment>
    ))}
  </ul>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.number.isRequired }),
  ).isRequired,
};

export default FriendsList;
