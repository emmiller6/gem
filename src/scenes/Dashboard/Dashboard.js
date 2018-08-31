import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchConsortia } from '../../services/redux/consortia/thunks';
import { getConsortiaStateFromState } from '../../services/rootReducer';
import '../../styles/main.scss';

class Dashboard extends React.Component {
	componentDidMount() {
		this.props.fetchConsortia();
	}

	render() {
		console.log(this.props.consortia);
		return (
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<header className="dk-header">
							<h1 className="dk-title">Welcome!</h1>
						</header>
					</div>
				</div>
				You're in the dashboard!
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		consortia: getConsortiaStateFromState(state),
	};
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators ({
		fetchConsortia,
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
