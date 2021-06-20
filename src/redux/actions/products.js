import axios from "axios";

export const fetchProducts = () => (dispatch) => {

	dispatch(setLoaded(false));

	axios.get('http://localhost:3001/products')
		.then(data => data.data)
		.then(items => dispatch(setProducts(items)));
};

export const setProducts = (items) => ({
	type: 'SET_PRODUCTS',
	payload: items
});

export const setLoaded = (payload) => ({
	type: 'SET_LOADED',
	payload,
});