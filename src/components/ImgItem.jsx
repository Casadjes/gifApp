import PropTypes from "prop-types";
import "./ImgItem.css";

export function ImgItem({ title, url }) {
	return (
		<div>
			<img className='imgGif' src={url} alt={title} />
			<p>{title}</p>
		</div>
	);
}

ImgItem.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired
};
