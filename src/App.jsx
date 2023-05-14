import { AddCategory } from "./components/AddCategory";
import "./App.css";
import { useState } from "react";
import { DisplayGif } from "./components/DisplayGif";

function App() {
	const [category, setCategory] = useState("");

	return (
		<div className='App'>
			<h1>Gif App</h1>
			<AddCategory setCategory={setCategory} />
			{category !== "" ? <h2>&quot;{category}&quot;</h2> : null}
			<DisplayGif category={category} />
		</div>
	);
}

export default App;
