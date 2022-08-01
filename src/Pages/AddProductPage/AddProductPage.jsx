import React, { useState } from 'react';
import { StyledAddProductPage } from './AddProductPage.style';
import Button from '../../components/Button/Button';

const AddProductPage = () => {
	const [name, setName] = useState('');
	const [type, setType] = useState('malt');
	const [expDate, setExpDate] = useState('');
	const [description, setDescription] = useState('');
	const [photoLink, setPhotoLink] = useState('');

	const handleClick = e => {
		e.preventDefault();
		console.log('name: ', name);
		console.log('expDate: ', expDate);
		console.log('description: ', description);
		console.log('type: ', type);
		console.log('photoLink: ', photoLink);
	};

	return (
		<StyledAddProductPage>
			<div className='wrapper'>
				<h1 id='page-heading'>
					Add <span>Product</span>
				</h1>

				<form>
					<div className='inputBox'>
						<input
							type='text'
							placeholder='name'
							onChange={e => setName(e.target.value)}
						/>
					</div>

					<div className='inputBox'>
						<select
							defaultValue={type}
							onChange={e => setType(e.target.value)}
						>
							<option value='malt'>malt</option>
							<option value='hop'>hop</option>
							<option value='yeast'>yeast</option>
							<option value='adjunct'>adjunct</option>
							<option value='malt extracts'>malt extracts</option>
						</select>
					</div>

					<div className='inputBox'>
						<input
							type='date'
							onChange={e => {
								setExpDate(e.target.value);
							}}
						/>
					</div>
					<div className='inputBox'>
						<input
							type='url'
							placeholder='photo Link'
							onChange={e => setPhotoLink(e.target.value)}
						/>
					</div>
					<div className='inputBox'>
						<textarea
							id='description'
							placeholder='description'
							onChange={e => setDescription(e.target.value)}
						></textarea>
					</div>
					{/* TODO: przerobic komponent button tak, aby animacja :hover była osobnym atrybutem - default = none animation */}

					<Button
						btn_style='btn-default'
						btn_size='btn-wide'
					>
						Add
					</Button>
				</form>
			</div>
		</StyledAddProductPage>
	);
};

export default AddProductPage;
