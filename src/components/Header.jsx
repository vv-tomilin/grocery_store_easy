import React from 'react';

function Header() {
	return (
		<div>
			<div className='header'>
				<div className='logo-block'>МАГАЗ-ПРОДУКТ</div>
				<div className='cart-block'>
					<button className='btn btn-cart'>Корзина</button>
					<div>
						<p>Количество<br /> товаров: 5</p>
						<p><br />На сумму: 1500 ₽</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;