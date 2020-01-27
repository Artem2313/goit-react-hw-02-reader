import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

const Controls = ({ items, publicationIndex, handleClick }) => {
  return (
    <section>
      <button
        disabled={publicationIndex === 0}
        className={styles.button}
        onClick={handleClick}
        name="prev"
        type="button"
      >
        Назад
      </button>
      <button
        disabled={publicationIndex === items - 1}
        className={styles.button}
        onClick={handleClick}
        name="next"
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  handleClick: PropTypes.func.isRequired,
  items: PropTypes.number.isRequired,
  publicationIndex: PropTypes.number.isRequired,
};

export default Controls;
