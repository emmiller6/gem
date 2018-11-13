import React from 'react';
import { Route, Router } from 'react-router';
import Dashboard from './scenes/Dashboard';
import { history } from './store';

const Routes = () => {
	return (
		<Router history={history}>
			<Route path="/" component={Dashboard} />
		</Router>
	)
};

export default Routes;
