/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';

const TransactionHistoryDetails = ({ type, amount, currency }) => (
  <tr>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </tr>
);

TransactionHistoryDetails.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryDetails;
