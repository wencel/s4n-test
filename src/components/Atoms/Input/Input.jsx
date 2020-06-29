import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Input.module.sass';
import DatePicker from 'react-datepicker';
import classnames from 'classnames';

import Label from '../Label/Label';
import 'react-datepicker/dist/react-datepicker.css';

const Input = ({ type, value, className, label, isError, ...props }) => {
  const classname = classnames({
    [className]: !!className,
    [Styles.Input]: true,
    [Styles.Error]: isError,
  });
  return (
    <div className={classname}>
      <Label>{label}</Label>
      {type === 'date' && <DatePicker selected={value} {...props} />}
      {type !== 'date' && <input value={value} type={type} {...props} />}
      <span className={Styles.focusBorder}></span>
    </div>
  );
};

Input.propTypes = {
  className: PropTypes.string,
  isError: PropTypes.bool,
  label: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ]),
};

export default Input;
