const initialState = {
	items: {},
	totalPrice: 0,
	totalCount: 0
};

const cart = (state = initialState, action) => {

	switch (action.type) {
		case 'ADD_PRODUCT_CART':
			return {
				...state,
			};
		default:
			return state;
	};
};

export default cart;