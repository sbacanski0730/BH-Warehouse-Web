import React from 'react';
import { StyledProductCard } from './ProductCard.style';
import beer_photo from '../../assets/default_beer_1.jpg';

const ProductCard = ({
	name,
	addedDate,
	expirationDate,
	type,
	description,
	photoLink,
}) => {
	const leftDays = expirationDate => {
		let today = new Date(),
			expDate = new Date(expirationDate),
			day = 24 * 60 * 60 * 1000;

		return Math.round(Math.abs((expDate - today) / day));
	};

	return (
		<StyledProductCard>
			<img src={photoLink ? photoLink : beer_photo} alt='Some beer photo' />
			<div className='info'>
				<h1>{name}</h1>
				<p>
					Days left: <span>{leftDays(expirationDate)}</span>
				</p>
			</div>
			<div className='hover'>
				<h1>{name}</h1>
				<p>
					Type: <span>{type}</span>
				</p>
				<p>
					Expiration date: <span>{expirationDate}</span>
				</p>
				<p>
					Added date: <span>{addedDate}</span>
				</p>
				<p className='description'>{description}</p>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
