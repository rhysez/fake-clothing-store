import { useState, useEffect } from 'react';
import Nav from './Nav';
import Item from './Item';

// would likely need to make API calls in Shop component
// then pass the data via props into Item component

function Shop(props) {
	const [itemData, setItemData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await fetch('https://fakestoreapi.com/products', {
					mode: 'cors',
				});
				const responseResults = await response.json();
				setTimeout(() => {
					setItemData(responseResults);
				}, '500');
			} catch {
				throw new Error('Could not retrieve product');
			}
		}
		fetchData();
	}, []);

	if (itemData === null) {
		return (
			<>
				<Nav />
				<h2
					style={{ marginTop: '25rem', textAlign: 'center', fontSize: '3rem' }}
					className='loading-shop'
				>
					Loading shop...
				</h2>
			</>
		);
	} else {
		return (
			<>
				<Nav />
				<h1
					style={{ marginTop: '10rem', textAlign: 'center', fontSize: '4rem' }}
					className='shop-title'
				>
					SHOP
				</h1>
				<div
					className='shop-items-container'
					style={{
						display: 'grid',
						gridTemplateColumns: 'repeat(4, 1fr)',
						gridTemplateRows: 'repeat(2, 1fr)',
						gap: '2rem',
						marginTop: '5%',
					}}
				>
					<Item
						image={itemData[0].image}
						title={itemData[0].title}
						price={itemData[0].price}
					/>
					<Item
						image={itemData[1].image}
						title={itemData[1].title}
						price={itemData[1].price}
					/>
					<Item
						image={itemData[2].image}
						title={itemData[2].title}
						price={itemData[2].price}
					/>
					<Item
						image={itemData[3].image}
						title={itemData[3].title}
						price={itemData[3].price}
					/>

					<Item
						image={itemData[15].image}
						title={itemData[15].title}
						price={itemData[15].price}
					/>
					<Item
						image={itemData[14].image}
						title={itemData[14].title}
						price={itemData[14].price}
					/>
					<Item
						image={itemData[16].image}
						title={itemData[16].title}
						price={itemData[16].price}
					/>
					<Item
						image={itemData[17].image}
						title={itemData[17].title}
						price={itemData[17].price}
					/>
				</div>
			</>
		);
	}
}

export default Shop;
