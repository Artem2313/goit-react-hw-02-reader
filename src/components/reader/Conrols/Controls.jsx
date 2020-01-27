import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

const Controls = ({ items, onPrevClick, onNextClick, publicationIndex }) => {
  return (
    <section>
      <button
        disabled={publicationIndex === 0}
        className={publicationIndex === 0 ? styles.disabled : styles.button}
        onClick={onPrevClick}
        type="button"
      >
        Назад
      </button>
      <button
        disabled={publicationIndex === items - 1}
        className={
          publicationIndex === items - 1 ? styles.disabled : styles.button
        }
        onClick={onNextClick}
        type="button"
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  onPrevClick: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  items: PropTypes.number.isRequired,
  publicationIndex: PropTypes.number.isRequired,
};

export default Controls;
