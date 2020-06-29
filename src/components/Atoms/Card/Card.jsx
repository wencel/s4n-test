import PropTypes from 'prop-types';
import React from 'react';
import classnames from 'classnames';
import Styles from './Card.module.sass';

const Card = ({ className, title, children }) => {
  const classname = classnames({
    [className]: !!className,
    [Styles.Card]: true,
  });
  return (
    <div className={classname}>
      <h4>{title}</h4>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  title: PropTypes.string,
};

export default Card;
