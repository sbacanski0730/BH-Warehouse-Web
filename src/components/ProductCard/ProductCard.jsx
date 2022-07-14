import React from 'react';
import { StyledProductCard } from './ProductCard.style';
import beer_photo from '../../assets/default_beer_1.jpg';

const ProductCard = () => {
	return (
		<StyledProductCard>
			<img src={beer_photo} alt='Some beer photo' />
			<div className='info'>
				<h1>Product name</h1>
				{/* Ilość dni do końca terminu ważności */}
				<p>
					Pozostało dni: <span>34</span>
				</p>
			</div>
			<div className='hover-info'>
				{/* Nazwa produktu */}
				<h1>ProductName</h1>
				{/* Typ productu */}
				<p>
					Type: <span>Słód</span>
				</p>
				{/* Data ważności productu */}
				<p>
					Data ważności: <span>24.11.2022</span>
				</p>
				{/* Data wprowadzenia productu */}
				<p>
					Data wprowadzenia: <span>23.10.2022</span>
				</p>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
