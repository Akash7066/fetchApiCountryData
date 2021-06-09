import { connect } from 'react-redux';
import React, { useState, useEffect } from 'react';
import { getData } from './Redux/action';
import './style.css';

import { slice, concat } from 'lodash';
import Card from './Card/card';

function App(props) {
	
	const [inputValues, setInput] = useState('');
	const [data_data, setDataData] = useState([]);

	const onChange = ({ target }) => setInput(target.value);

	useEffect(() => {
		props.countryData(inputValues);
	}, []);

	// keeps watch on fetchData when it changed by redux
	// when redux changes data this use effect is called automatically
	useEffect(() => {
		console.log("called", props.fetchData);
		if (props.fetchData.data) {
			setDataData(slice(props.fetchData.data, 0, LIMIT));
		} else {
			setDataData([]);
		}
	}, [props.fetchData.data]);
	
	const LIMIT = 9;
	const [index, setIndex] = useState(LIMIT);

	const loadMore = () => {
		const newIndex = index + LIMIT;
		const newList = concat(data_data, slice(props.fetchData.data, index, newIndex));
		setIndex(newIndex);
		setDataData(newList);
	};

	const changesData = () => {
		console.log('1 call this ')
		props.countryData(inputValues);
	};

	return (
		<div className="App">
			<br />
			<h1>
				<center>Country Gallery</center>
			</h1>

			<input value={inputValues} onChange={onChange} style={{ background: '#fff', marginLeft: '5%' }} />
			<button
				onClick={() => {
					changesData();
				}}
			>
				Search
			</button>
			<div>
				{data_data.length !== 0 ? <Card data={data_data} /> : <p style={{ marginLeft: '5%', marginTop: '5%' }}>loading...</p>}
				<div className="pagination-wrapper">
					{
						<button
							onClick={loadMore}
							class="btn btn-primary"
							style={{ marginLeft: '50%', marginTop: '5%', marginBottom: '5%' }}
						>
							Load More
						</button>
					}
				</div>
			</div>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		fetchData: state.country
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		countryData: (input_region) => {
			dispatch(getData(input_region));
		}
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
