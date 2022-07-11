import React from 'react';
import { StyledProductCard } from './ProductCard.style';
import beer_photo from '../../assets/default_beer_1.jpg';

const ProductCard = () => {
	return (
		<StyledProductCard>
			<img src={beer_photo} alt='Some beer photo' />
			<div className='info'>
				<h1>Product name</h1>
				<p>
					Lorem ipsum dolor: <span>34</span>
				</p>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
