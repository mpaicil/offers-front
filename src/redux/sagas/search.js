import { put, call, takeLatest } from 'redux-saga/effects'
import { SEARCH_DATA_START, SEARCH_DATA_ERROR, SEARCH_DATA_COMPLETE } from '../../consts/actionTypes'
import { apiCall } from '../api'

export function* searchData({ payload }) {
    try {
        console.log("Toi LLamando")
        const response = yield call(apiCall, `products?search=${payload.search}`, null, null, 'GET')
        console.log(response)
        yield put({ type: SEARCH_DATA_COMPLETE, response })
    } catch (error) {
        console.log("salio error?")
        yield put({ type: SEARCH_DATA_ERROR, error })
    }
}

export default function* search() {
    yield takeLatest(SEARCH_DATA_START, searchData)
}