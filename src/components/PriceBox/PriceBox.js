import React from 'react';
import PropTypes from 'prop-types';
import PriceText from '../PriceText';
import './styles.css';

export const PriceBox = ({ name, amount }) => {
	return (
		<div className="em-price-box">
			{name}
			<PriceText amount={amount}/>
		</div>
	);
};

PriceBox.propTypes = {
	name: PropTypes.string,
	amount: PropTypes.string,
};

export default PriceBox;
