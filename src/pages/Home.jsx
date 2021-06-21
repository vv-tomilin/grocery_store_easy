import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/actions/products';
import { setCategory } from '../redux/actions/filters';

import { Categories, Header, ProductBlock } from '../components';

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
		dispatch(fetchProducts());
	}, []);

	const onSelectCategory =(index)=> {
		dispatch(setCategory(index));
	};

	return (
		<div>
			<Header />
			<Categories
				activeCategory={category}
				items={categoryNames}
				onClickCategory={onSelectCategory} />
			<div className='product-list'>
				{
					items.map(obj =>
						<ProductBlock
							key={obj.id}
							name={obj.name}
							imageURL={obj.imageURL}
							price={obj.price} />)
				}
			</div>
		</div>
	);
}

export default Home;