import React from 'react';
import { StyledProductsPage } from './ProductsPage.styled';
import ProductCard from '../../components/ProductCard/ProductCard';
import beer_photo from '../../assets/default_beer_1.jpg';

const ProductsPage = () => {
	return (
		<>
			<StyledProductsPage>
				<h1 id='page-heading'>
					Your <span>Products</span>
				</h1>
				<div className='products-container'>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
					<ProductCard
						name='summit USA'
						addedDate='05.12.2022'
						expirationDate='09.01.2022'
						type='hop'
						description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
					/>
				</div>
			</StyledProductsPage>
		</>
	);
};

export default ProductsPage;

{
	/* <ProductCard
	name='summit USA'
	addedDate='05.12.2022'
	expirationDate='09.01.2022'
	type='hop'
	description='Strong aroma profile which includes citrus and grapefruit notes. Good in American IPA, Imperial IPA.'
/>; */
}
