import React from "react";
import PropTypes from "prop-types";

export const MyButton = ({ variant, text, onClickHandler }) => {
  return (
    <div>
      <button className={variant} onClick={() => onClickHandler(text)}>
        {text}
      </button>
    </div>
  );
};

MyButton.propTypes = {
  variant: PropTypes.oneOf(["rounded", "square"]),
  onClickHandler: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
