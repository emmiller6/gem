import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Web3 from 'web3';
import './styles.css';

const amountOfUSD = 5;
const testAccountA = '0x2a68524e8fdf5dd423de57560eb03e513d370c07';
const testAccountB = '0xe9df7c766599d6f3214a1592ff965298cf86b362';

class TransferEther extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isSubmitted: false,
			accountA: '',
			accountB: '',
		};
		if (typeof window.web3 !== 'undefined') {
			// Use MetaMask's provider
			this.web3 = new Web3(window.web3.currentProvider);
		} else {
			this.web3 = null;
		}

		this._handleChange = this._handleChange.bind(this);
	}

	_handleChange = (event) => {
		const target = event.target;
		this.setState({
			[target.name]: target.value
		});
	};

	_transferEther = () => {
		// reset state
		this.setState({
			isSubmitted: false,
		});
		const etherAmount = (amountOfUSD/this.props.ether.amount);
		const transactionObject = {
			from: this.state.accountA || testAccountA,
			to: this.state.accountB || testAccountB,
			value: window.web3.toWei(etherAmount, 'ether'),
		};
		this.web3.eth.sendTransaction(transactionObject, function(error, result){
			if (!error) {
				this._transferSuccess();
			} else {
				console.error(error);
			}
		}.bind(this));
	};

	_transferSuccess = () => {
		this.setState({
			isSubmitted: true,
		});
	};

	render() {
		return (
			<div className="transfer-section">
				<p>Like the price you see? Transfer $5 in Ether from Account A to Account B.</p>
				{this.state.isSubmitted &&
				<p className="transfer-submitted">Your transfer has been submitted. You will be notified when it is confirmed.</p>
				}
				<form>
					<div className="form-group">
						<label className="form-input-group">
							Account A:
							<input name="accountA" className="form-input" value={this.state.accountA} onChange={this._handleChange} />
						</label>
						<label className="form-input-group">
							Account B:
							<input name="accountB" className="form-input" value={this.state.accountB} onChange={this._handleChange} />
						</label>
					</div>
				</form>
				{this.props.ether &&
				<button type="button" className="btn btn-outline-success transfer-btn" onClick={this._transferEther}>Transfer now</button>
				}
			</div>
		);
	}
}

TransferEther.propTypes = {
	ether: PropTypes.object,
};

export default TransferEther;
