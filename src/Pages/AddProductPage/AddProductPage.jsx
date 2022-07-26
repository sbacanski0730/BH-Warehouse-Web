import React, { useState } from 'react';
import { StyledAddProductPage } from './AddProductPage.style';
import Button from '../../components/Button/Button';

const AddProductPage = () => {
	const [name, setName] = useState('');
	const [type, setType] = useState('');
	const [expDate, setExpDate] = useState('');
	const [description, setDescription] = useState('');
	const [photoLink, setPhotoLink] = useState('');

	const handleClick = e => {
		console.log(type);
	};

	return (
		<StyledAddProductPage>
			<div className='wrapper'>
				<h1 id='page-heading'>
					Add <span>Product</span>
				</h1>

				<form>
					{/* TODO: poprawić i przemieścić 'input' od wybierania typów; przestylować */}
					{/* TODO: sprawdzic jak wyciagnac dane z wybranego elementu z tagu select */}
					<div className='inputBox'>
						<input type='text' placeholder='name' />
					</div>
					<div className='inputBox'>
						<select
							placeholder='choose value'
							value={type}
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
						<input type='text' placeholder='expiration date' />
					</div>
					<div className='inputBox'>
						<input type='text' placeholder='description' />
					</div>
					<div className='inputBox'>
						{/* TODO: przerobic komponent button tak, aby animacja :hover była osobnym atrybutem - default = none animation */}
						{/* <Button btn_style='btn-default' btn_size='btn-normal'>
							Add
						</Button> */}
					</div>
					{/* <Button btn_style='btn-default' btn_size='btn-wide'>
						Add
					</Button> */}
					<button onClick={handleClick}>Dodaj</button>
				</form>
			</div>
		</StyledAddProductPage>
	);
};

export default AddProductPage;
