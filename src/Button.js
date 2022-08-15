import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ passedId, color, text, parentCallback }) => (
  <button
    id={passedId}
    onClick={() => parentCallback()}
    style={{ color: color }}
  >
    {text}
  </button>
);

Button.propTypes = {
  passedId: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

Button.defaultProps = {};

export default Button;
