import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.png';

const propTypes = {
  className: PropTypes.string,
};

const defaultProps = {
  className: undefined,
};

const Logo = ({ className }) => (
  <span className={className}>
    <img src={logo} alt="logo" />
  </span>
);

Logo.propTypes = propTypes;
Logo.defaultProps = defaultProps;

export default Logo;
