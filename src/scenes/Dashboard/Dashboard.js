import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchAllCurrentPrices } from '../../services/redux/prices/thunks';
import {
	getBitcoinPriceFromPricesState,
	getEtherPriceFromPricesState,
	getPricesStateFromState,
} from '../../services/rootReducer';
import '../../App.css';
import PriceBox from '../../components/PriceBox';
import TransferEther from './components/TransferEther';

let pricesInterval;
const intervalTime = 60000;

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.fetchAllCurrentPrices();
		this.setPricesInterval();
	}

	setPricesInterval() {
		pricesInterval = setInterval(this.timer, intervalTime);
	}

	timer = () => {
		this.props.fetchAllCurrentPrices();
	};

	_refreshPrices = () => {
		clearInterval(pricesInterval);
		this.props.fetchAllCurrentPrices();
		this.setPricesInterval();
	};

	render() {
		console.log('props');
		console.log(this.props);
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<header className="em-header">
							<h1 className="em-title">Welcome!</h1>
						</header>
						<div className="em-body">
							<p className="em-intro">
								Em's awesome cryptocurrency dapp
							</p>
							<p>Current prices - updates every 60 seconds</p>
							{this.props.prices && this.props.prices.error
								? (<div className="em-error">Unable to fetch current prices. Please try back later.</div>)
								: null
							}
							{this.props.bitcoin && (<PriceBox name="Bitcoin" amount={this.props.bitcoin.amount} />)}
							{this.props.ethereum && (<PriceBox name="Ethereum" amount={this.props.ethereum.amount} />)}
							<p className="em-btn-container">
								<button type="button" className="btn btn-info" onClick={this._refreshPrices}>Refresh prices now!</button>
							</p>
							<TransferEther ether={this.props.ethereum} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		prices: getPricesStateFromState(state),
		bitcoin: getBitcoinPriceFromPricesState(state),
		ethereum: getEtherPriceFromPricesState(state),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		fetchAllCurrentPrices
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
