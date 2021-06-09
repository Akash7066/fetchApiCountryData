import axios from 'axios';

export const getData = (data) => {
	return {
		type: 'GET_DATA',
		payload: data,
		check: 1
	};
};

export const doneData = (data) => {
	console.log('from action ',data)
	return {
		type: 'GET_DATA_DONE',
		payload: data,
		check:0
	};
};
export const loadFail = (e) => {
	return {
		type: 'GET_POST_FAILURE',
		payload: e
	};
};
