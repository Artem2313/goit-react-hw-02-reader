/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import generateColor from './RandomColor';
import classes from './Statistic.module.css';

const StatisticalDetails = ({ label, percentage }) => (
  <>
    <li className={classes.item} style={{ backgroundColor: generateColor() }}>
      <span className={classes.label}>{label}</span>
      <span className={classes.percentage}>{percentage}%</span>
    </li>
  </>
);

StatisticalDetails.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticalDetails;
