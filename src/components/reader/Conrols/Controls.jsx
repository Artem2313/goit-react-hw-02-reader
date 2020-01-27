import React from 'react';
import PropTypes from 'prop-types';
import styles from './Styles.module.css';

const Controls = ({
  btn,
  items,
  onPrevClick,
  onNextClick,
  prevBtnDisabled,
  nextBtnDisabled,
}) => {
  return (
    <section>
      <button
        disabled={prevBtnDisabled}
        className={btn === 0 ? styles.disabled : styles.button}
        onClick={onPrevClick}
        type="button"
      >
        Назад
      </button>
      <button
        disabled={nextBtnDisabled}
        className={btn === items - 1 ? styles.disabled : styles.button}
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
  btn: PropTypes.number.isRequired,
  items: PropTypes.number.isRequired,
  prevBtnDisabled: PropTypes.bool.isRequired,
  nextBtnDisabled: PropTypes.bool.isRequired,
};

export default Controls;
