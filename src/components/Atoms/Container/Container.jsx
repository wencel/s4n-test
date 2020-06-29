import PropTypes from 'prop-types';
import React from 'react';
import Styles from './Container.module.sass';

const Container = ({ children }) => {
  return <div className={Styles.Container}>{children}</div>;
};

Container.propTypes = {
  children: PropTypes.any,
};

export default Container;
