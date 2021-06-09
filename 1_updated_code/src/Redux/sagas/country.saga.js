import axios from 'axios';
import { takeEvery, takeLatest, call, put } from 'redux-saga/effects';

import { doneData, loadFail } from '../action';

//
function* fecthCountryData(props) {
	const query = props.payload;
	console.log(props)
	try {
		const user_data = yield call(apidata, query);
		yield put(doneData(user_data));
	} catch (e) {
		yield put(loadFail(e));
	}
}

export function* waitForFetchCountryData() {
	yield takeLatest('GET_DATA', fecthCountryData);
}

const apidata = async (first) => {
	var apiRecord = '';
	if (first == '') {
		apiRecord = await axios.get('https://restcountries.eu/rest/v2/all');
	} else {
		apiRecord = await axios.get(`https://restcountries.eu/rest/v2/region/${first}`);
	}

	return apiRecord.data;
};
