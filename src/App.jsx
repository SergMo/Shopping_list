import { useState } from 'react'
import Header from './components/Header';
import Item from './components/Item';

function App() {
	const itemList = [
		'bananas',
		'apple',
		'milk',
		'bread',
		'cheese'
	];

	return (
		<div>
			<Header />
			<Item items={itemList} />
		</div>
	)
}

export default App
