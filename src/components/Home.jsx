import React from 'react';


function Home() {
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
			<div className='categories-group'>
				<button className='btn cart-btn active-categories'>Все</button>
				<button className='btn cart-btn'>Овощи</button>
				<button className='btn cart-btn'>Фрукты</button>
				<button className='btn cart-btn'>Мясо</button>
				<button className='btn cart-btn'>Молочка</button>
			</div>
			<div className='product-list'>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'tomat'} width='150' height='150' src='https://w7.pngwing.com/pngs/159/512/png-transparent-close-up-of-red-tomato-plum-tomato-cherry-tomato-pizza-vegetable-tomato-slicer-tomato-natural-foods-food-tomato-thumbnail.png' />
					</div>
					<p>Помидоры</p>
					<div className='price'>200 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'banan'} width='150' height='150' src='https://w7.pngwing.com/pngs/332/204/png-transparent-banana-banana-natural-foods-food-fitness-thumbnail.png' />
					</div>
					<p>Бананы</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'kolbasa'} width='150' height='150' src='https://w7.pngwing.com/pngs/899/52/png-transparent-salami-bratwurst-sausage-cervelat-mettwurst-sausage-food-animal-source-foods-charcuterie-thumbnail.png' />
					</div>
					<p>Колбаса</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'milk'} width='150' height='150' src='https://w7.pngwing.com/pngs/497/643/png-transparent-on-a-milk-carton-on-a-milk-carton-food-milk-food-breakfast-logo-thumbnail.png' />
					</div>
					<p>Молоко</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'yogurt'} width='150' height='150' src='https://w7.pngwing.com/pngs/461/488/png-transparent-chocolate-milk-yogurt-berry-cream-fresh-strawberry-yogurt-packaging-natural-foods-food-strawberries-thumbnail.png' />
					</div>
					<p>Йогурт</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'котлеты'} width='150' height='150' src='https://w7.pngwing.com/pngs/730/279/png-transparent-meatball-beef-ball-pork-ball-stuffing-hot-pot-meatballs-meatballs-soup-food-recipe-thumbnail.png' />
					</div>
					<p>Котлеты</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'апельсин'} width='150' height='150' src='https://w7.pngwing.com/pngs/1001/506/png-transparent-slices-of-oranges-orange-juice-flavor-fruit-nutritious-orange-natural-foods-food-orange-thumbnail.png' />
					</div>
					<p>Апельсин</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'огурец'} width='150' height='150' src='https://w7.pngwing.com/pngs/65/88/png-transparent-sliced-cucumber-juice-pickled-cucumber-vegetable-food-cut-cucumber-slices-natural-foods-tomato-eating-thumbnail.png' />
					</div>
					<p>Огурец</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
				<div className='product-block'>
					<div className='product-img-container'>
						<img alt={'картошка'} width='150' height='150' src='https://w7.pngwing.com/pngs/148/944/png-transparent-three-potatoes-potato-potato-s-s-fitness-food-fruit-thumbnail.png' />
					</div>
					<p>Картошка</p>
					<div className='price'>300 ₽</div>
					<button className='btn cart-btn'>В корзину</button>
				</div>
			</div>
		</div>
	);
}

export default Home;