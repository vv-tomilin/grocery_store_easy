import React from 'react';

function Header({ totalCount, totalPrice }) {

	return (
		<div>
			<div className='header'>
				<div className='logo-block'>МАГАЗ-ПРОДУКТ</div>
				<div className='cart-block'>
					<button className='btn btn-cart'>Корзина</button>
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