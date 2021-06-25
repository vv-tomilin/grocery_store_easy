import React from 'react';
import { useSelector } from 'react-redux';

function Cart() {

	const items = useSelector(({ cart }) => cart.items);

	const productGroup = Object.keys(items)
		.map((key) => {
			return items[key];
		});

	return (
		<div>
			<ul className='cart-list' >
				{
					productGroup && productGroup.map((arrGroup, index) => {

						const totalPrice = arrGroup[0].price * arrGroup.length;
						const img = arrGroup[0].imageURL;

						return (
							<li
								className="cart-item"
								key={index} >
								<img src={img} alt='product_item' width='50' height='50' />
								<p>{arrGroup[0].name}</p>
								<p>Количество: {arrGroup.length}</p>
								<p>На общую сумму: {totalPrice} ₽</p>
							</li>
						)
					})
				}
			</ul>
		</div>
	)
}

export default Cart;
