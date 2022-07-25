import React from 'react';
import { StyledAddProductPage } from './AddProductPage.style';

const AddProductPage = () => {
	return (
		<StyledAddProductPage>
			<div className='wrapper'>
				<h1 className='heading'>Add Product</h1>
				<div className='container'>
					<form>
						<div className='name-input'>
							<label htmlFor=''>name</label>
							<input type='text' />
						</div>
						<div className='type-input'>
							<label htmlFor=''>type</label>
							<input type='text' />
						</div>
						<div className='exp-date-input'>
							<label>expiration date</label>
							<input type='text' />
						</div>
						<div className='des-input'>
							<label>description</label>
							<input type='text' />
						</div>
						<div className='photo-link-input'>
							<label htmlFor=''></label>
							<input type='text' />
						</div>
					</form>
				</div>
			</div>
		</StyledAddProductPage>
	);
};

export default AddProductPage;
