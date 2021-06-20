import React from 'react';

function ProductBlock({ name, imageURL, price }) {

	return (
		<div>
			<div className='product-block'>
				<div className='product-img-container'>
					<img alt={name} width='150' height='150' src={imageURL} />
				</div>
				<p>{name}</p>
				<div className='price'>{price} ₽</div>
				<button className='btn cart-btn'>В корзину</button>
			</div>
		</div>
	)
}

export default ProductBlock;
