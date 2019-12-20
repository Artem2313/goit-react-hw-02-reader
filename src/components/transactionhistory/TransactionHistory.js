/* eslint-disable react/jsx-props-no-spreading */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TransactionHistoryDetails from './TransactionHistoryDetails';
import classes from './Transaction.module.css';

const TransactionHistory = ({ items = [] }) => (
  <table className={classes.tablemain}>
    <thead>
      <tr>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {items.map(item => (
        <Fragment key={item.id}>
          <TransactionHistoryDetails {...item} />
        </Fragment>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
};

export default TransactionHistory;
