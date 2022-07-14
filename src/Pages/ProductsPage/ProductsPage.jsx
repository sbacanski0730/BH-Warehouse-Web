import React from 'react';
import { StyledProductsPage } from './ProductsPage.styled';
import ProductCard from '../../components/ProductCard/ProductCard';

const ProductsPage = () => {
	return (
		<>
			<StyledProductsPage>
				<h1 id='heading'>Your Products</h1>
				<div className='container'>
					<ProductCard />
				</div>
			</StyledProductsPage>
		</>
	);
};

export default ProductsPage;
