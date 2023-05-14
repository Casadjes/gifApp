import PropTypes from "prop-types";
import { useState } from "react";

export function AddCategory({ setCategory }) {
	const [value, setValue] = useState("");
	const [error, setError] = useState(false);

	const searchGif = (e) => {
		e.preventDefault();
		if (value === "") {
			setError(true);
			return;
		}
		setError(false);
		setCategory(value);
		setValue("");
	};
	return (
		<>
			<form onSubmit={searchGif}>
				<input
					type='text'
					placeholder='Search...'
					onChange={(e) => {
						setValue(e.target.value);
					}}
					value={value}
				/>
			</form>
			{error ? <p className='error'>El campo no puede estar vacio</p> : ""}
		</>
	);
}

AddCategory.propTypes = {
	setCategory: PropTypes.func
};
