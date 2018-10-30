import React from 'react';

const Home = () => {
	return (
		<div>
			<div>I am the Home component</div>
			<button onClick={() => console.log("button clicked")}>Click me!</button>
		</div>
		);
};

export default Home;