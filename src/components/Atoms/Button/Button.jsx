import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Button.module.sass';
import classnames from 'classnames';

const Button = ({ className, ...props }) => {
  const classname = classnames({
    [className]: !!className,
    [Styles.Button]: true,
  });
  return <button className={classname} {...props}></button>;
};

Button.propTypes = {
  className: PropTypes.string,
};

export default Button;
