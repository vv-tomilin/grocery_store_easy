import React from 'react';

function Categories() {
	return (
		<div>
			<div className='categories-group'>
				<button className='btn cart-btn active-categories'>Все</button>
				<button className='btn cart-btn'>Овощи</button>
				<button className='btn cart-btn'>Фрукты</button>
				<button className='btn cart-btn'>Мясо</button>
				<button className='btn cart-btn'>Молочка</button>
			</div>
		</div>
	);
}

export default Categories;