/* eslint-disable no-mixed-spaces-and-tabs */
import PropTypes from "prop-types";
import { useApi } from "../hooks/useApi";
import { ImgItem } from "./ImgItem";

export function DisplayGif({ category }) {
	const url = `https://api.giphy.com/v1/gifs/search?api_key=uKOSPLEPr2uhW22YEm6IjOY2kzSg5LvS&q=${category}&limit=27`;
	const { loading, data } = useApi(url);

	return (
		<div className='container-gifs'>
			{loading
				? data.map((img) => (
						<ImgItem
							key={img.id}
							title={img.title}
							url={img.images.downsized_medium.url}
						/>
				  ))
				: ""}
		</div>
	);
}

DisplayGif.propTypes = {
	category: PropTypes.string.isRequired
};
