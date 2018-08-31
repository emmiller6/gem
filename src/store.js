import { createStore, compose, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './services/rootReducer';
import api from './services/api';
import thunk from 'redux-thunk';

export const history = createHistory();

const enhancers = [];
const middleware = [thunk.withExtraArgument({ api })];

// redux devtools
if (process.env.NODE_ENV === 'development') {
	const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
	if (typeof devToolsExtension === 'function') {
		enhancers.push(devToolsExtension());
	}
}

const composeEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer, composeEnhancers);

export default store;
