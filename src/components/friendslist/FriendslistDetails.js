/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import classes from './Friendslist.module.css';

const FriendslistDetails = ({ avatar, isOnline, name, alt }) => (
  <li className={classes.item}>
    <span
      style={{ color: isOnline === true ? 'green' : 'red' }}
      className={classes.circle}
    >
      <FontAwesomeIcon icon={faCircle} />
    </span>
    <img className={classes.avatar} src={avatar} alt={alt} width="48" />
    <p className={classes.name}>{name}</p>
  </li>
);

FriendslistDetails.defaultProps = {
  alt: 'user avatar',
};

FriendslistDetails.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  alt: PropTypes.string,
};

export default FriendslistDetails;
