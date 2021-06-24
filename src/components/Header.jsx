import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {

	const { totalCount, totalPrice } = useSelector(({ cart }) => cart);

	return (
		<div>
			<div className='header'>
				<Link to='/'>
					<div className='logo-block'>МАГАЗ-ПРОДУКТ</div>
				</Link>
				<div className='cart-block'>
					<Link to='/cart'>
						<button className='btn btn-cart'>Корзина</button>
					</Link>
					<div>
						<p>Количество<br /> товаров: {totalCount}</p>
						<p><br />На сумму: {totalPrice} ₽</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;