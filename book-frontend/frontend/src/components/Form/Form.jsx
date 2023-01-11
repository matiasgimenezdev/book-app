import React, { useState } from 'react';
import './Form.scss';

const Form = ({ handleSubmit }) => {
	function capitalizeFirstLetter(string) {
		return string.charAt(0).toUpperCase() + string.slice(1);
	}

	const initialForm = {
		title: '',
		author: '',
		year: '',
		cover: '',
	};

	const [form, setForm] = useState(initialForm);

	const handleChange = (event) => {
		setForm({
			...form,
			[event.target.name]: capitalizeFirstLetter(
				event.target.value.toLowerCase()
			),
		});
	};

	return (
		<>
			<form className='form' onSubmit={(e) => handleSubmit(e, form)}>
				<div className='input-container'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						name='title'
						id='title'
						onChange={handleChange}
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='author'>Author</label>
					<input
						type='text'
						name='author'
						id='author'
						onChange={handleChange}
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='year'>Year</label>
					<input
						type='text'
						name='year'
						id='year'
						onChange={handleChange}
					/>
				</div>
				<div className='input-container'>
					<label htmlFor='cover'>URL</label>
					<input
						className='img'
						type='text'
						name='cover'
						id='cover'
						onChange={handleChange}
					/>
				</div>
				<input type='submit' className='submit' value='Register' />
			</form>
		</>
	);
};

export default Form;
