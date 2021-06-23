import React from 'react';

function ProductBlock({ id, name, imageURL, price, onClickAddProduct }) {

	const onAddProduct = () => {

		const obj = {
			id,
			name,
			price
		};

		onClickAddProduct(obj);
	};

	return (
		<div>
			<div className='product-block'>
				<div className='product-img-container'>
					<img alt={name} width='150' height='150' src={imageURL} />
				</div>
				<p>{name}</p>
				<div className='price'>{price} ₽</div>
				<button
					className='btn cart-btn'
					onClick={onAddProduct} >В корзину</button>
			</div>
		</div>
	)
}

export default ProductBlock;
