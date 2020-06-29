import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Label.module.sass';
import classnames from 'classnames';

const Label = ({ className, children, ...props }) => {
  const classname = classnames({
    [className]: !!className,
    [Styles.Label]: true,
  });
  return (
    <label {...props} className={classname}>
      {children}
    </label>
  );
};

Label.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
};

export default Label;
