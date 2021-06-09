import {all} from 'redux-saga/effects'
import {waitForFetchCountryData} from './Redux/sagas/country.saga'

export default function* rootSaga(){
    yield all([waitForFetchCountryData()])
}