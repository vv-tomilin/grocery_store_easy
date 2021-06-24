import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/actions/products';
import { setCategory } from '../redux/actions/filters';
import { addProductToCart } from '../redux/actions/cart';

import { Categories, ProductBlock } from '../components';

const categoryNames = [
	'Овощи',
	'Фрукты',
	'Мясо',
	'Молочка'
];


function Home() {

	const dispatch = useDispatch();

	const items = useSelector(({ products }) => products.items);
	const { category } = useSelector(({ filters }) => filters);

	React.useEffect(() => {
		dispatch(fetchProducts(category));
	}, [category]);

	const onSelectCategory = (index) => {
		dispatch(setCategory(index));
	};

	const handleAddProductToCart = (obj) => {
		dispatch(addProductToCart(obj));
	};

	return (
		<div>
			<Categories
				activeCategory={category}
				items={categoryNames}
				onClickCategory={onSelectCategory} />
			<div className='product-list'>
				{
					items.map((obj) =>
						<ProductBlock
							key={obj.id}
							id={obj.id}
							name={obj.name}
							imageURL={obj.imageURL}
							price={obj.price}
							onClickAddProduct={handleAddProductToCart} />)
				}
			</div>
		</div>
	);
}

export default Home;