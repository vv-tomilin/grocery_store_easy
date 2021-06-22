import React from 'react';

function Categories({ activeCategory, items, onClickCategory }) {
	return (
		<ul className='categories-group'>
			<li>
				<button
					className={activeCategory === null
						? 'btn cart-btn active-categories'
						: 'btn cart-btn'}
					onClick={() => onClickCategory(null)}
				>Все</button>
			</li>
			{
				items && items.map((name, index) => (
					<li key={`${name}_${index}`}>
						<button
							className={activeCategory === index
								? 'btn cart-btn active-categories'
								: 'btn cart-btn'}
							onClick={() => onClickCategory(index)}
						>{name}</button>
					</li>
				))
			}
		</ul>
	);
}

export default Categories;