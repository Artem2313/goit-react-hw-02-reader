/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import classes from './Profile.module.css';

const ProfileDetails = ({ name, tag, location, avatar, stats, alt }) => (
  <div className={classes.profile}>
    <div className={classes.description}>
      <img src={avatar} alt={alt} className={classes.avatar} />
      <p className={classes.name}>{name}</p>
      <p className={classes.tag}>{tag}</p>
      <p className={classes.location}>{location}</p>
    </div>

    <ul className={classes.stats}>
      <li className={classes.statchildren}>
        <span className={classes.label}>Followers</span>
        <span className={classes.quantity}>{stats.followers}</span>
      </li>
      <li className={classes.statchildren}>
        <span className={classes.label}>Views</span>
        <span className={classes.quantity}>{stats.views}</span>
      </li>
      <li className={classes.statchildren}>
        <span className={classes.label}>Likes</span>
        <span className={classes.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

ProfileDetails.defaultProps = {
  alt: 'user avatar',
};

ProfileDetails.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  alt: PropTypes.string,
};

export default ProfileDetails;
