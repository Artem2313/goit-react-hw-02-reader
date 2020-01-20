import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

const Publication = ({ publication: { title, text } , number, items}) => {
  return (
    <article>
      <h2 styles={styles.h2}>{title}</h2>
      <p styles={styles.p}>{text}</p>
      <p>
          {number + 1}/{items}
        </p>
    </article>
  );
};

Publication.propTypes = {
  publication: PropTypes.shape({
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  number: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
};

export default Publication;
