import { useState } from 'react';


export default function Item({ items }) {
	// console.log(items);

	const [selectedItems, setSelectedItems] = useState([]);

	const itemAdd = (event, item) => {
		event.preventDefault();
		setSelectedItems([...selectedItems, item])
	}

	const itemDelete = (event, item) => {
		const removedItems = selectedItems.filter((selectItem) => selectItem !== item)
		setSelectedItems([removedItems])
	}
	return (
		<div>
			{items.map((item) => {
				return (
					<div key={item}>
						{item}
						<button onClick={(event) => { itemAdd(event, item) }}>add item</button>
						<button onClick={(event) => { itemDelete(event, item) }}>delete item</button>
					</div>

				)
			})}
			<h1>Shoping list</h1>
			{selectedItems.map((item) => {
				return (
					<div key={item}>
						{item}
						{/* <button>delete item</button> */}
					</div>
				)
			})}
		</div>
	)
}