import { combineReducers } from 'redux';

import products from './products';
import filters from './filters';
import cart from './cart';

const rootReducer = combineReducers({
	products,
	filters,
	cart,
});

export default rootReducer;