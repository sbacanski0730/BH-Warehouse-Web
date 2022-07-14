import React from 'react';
import { StyledProductsPage } from './ProductsPage.styled';
import ProductCard from '../../components/ProductCard/ProductCard';
import products from './productsData';

const ProductsPage = () => {
	// if (!products || products === 0) return <>Warehouse is Empty</>;
	console.log(products);
	products.forEach(item => {
		console.log(item.name);
		console.log(item.type);
		console.log(item.addDate);
		console.log(item.expirationDate);
		console.log(item.description);
		console.log(item.photoLink);
	});
	return (
		<>
			<StyledProductsPage>
				<h1 id='heading'>Your Products</h1>
				<div className='container'>
					{products.map((item, index) => {
						return (
							<ProductCard
								key={index}
								name={item.name}
								addedDate={item.addDate}
								expirationDate={item.expirationDate}
								type={item.type}
								description={item.description}
								photoLink={item.photoLink}
							/>
						);
					})}
				</div>
			</StyledProductsPage>
		</>
	);
};

export default ProductsPage;
