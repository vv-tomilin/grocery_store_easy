import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../redux/actions/products';

import { Categories, Header, ProductBlock } from '../components';


function Home() {

	const dispatch = useDispatch();

	const items = useSelector(({ products }) => products.items);
	//const isLoaded = useSelector(({ products }) => products.isLoaded);

	React.useEffect(() => {
		dispatch(fetchProducts());
	}, [])

	return (
		<div>
			<Header />
			<Categories />
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