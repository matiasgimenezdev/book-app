import React, { useState } from 'react';
import './Form.scss';

const Form = ({ handleSubmit }) => {
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
			[event.target.name]: event.target.value,
		});
	};

	return (
		<>
			<form className='form' onSubmit={(e) => handleSubmit(e, form)}>
				<label htmlFor='title'>Title</label>
				<input
					type='text'
					name='title'
					id='title'
					onChange={handleChange}
				/>
				<label htmlFor='author'>Author</label>
				<input
					type='text'
					name='author'
					id='author'
					onChange={handleChange}
				/>
				<label htmlFor='year'>Year</label>
				<input
					type='text'
					name='year'
					id='year'
					onChange={handleChange}
				/>
				<label htmlFor='cover'>URL</label>
				<input
					type='text'
					name='cover'
					id='cover'
					onChange={handleChange}
				/>
				<input type='submit' className='submit' value='Add' />
			</form>
		</>
	);
};

export default Form;
