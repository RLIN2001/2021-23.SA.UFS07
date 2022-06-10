import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, onData, type }) => {

  
  
  function onInput (InputEvent)
  {
    console.log("Input.onData",InputEvent);
    if(typeof onData==='function'){
      onData(InputEvent.target.value);
    }
  }

  return (
    <input
      onInput={onInput}
      placeholder={placeholder}
      type={type}
    >
    </input>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  onData: PropTypes.func,
  isValid: PropTypes.bool,
  type: PropTypes.string,
};

Input.defaultProps = {
  type:'text',
  onData: undefined,
  isValid: undefined,
};
