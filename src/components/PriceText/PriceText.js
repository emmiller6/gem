import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export const PriceText = ({ amount }) => {
	return <span className="em-price-text">${amount}</span>;
};

PriceText.propTypes = {
	amount: PropTypes.string,
};

export default PriceText;
