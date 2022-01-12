import axios from "axios";
import * as types from "../types";
import { put, takeEvery } from "redux-saga/effects";

const token = localStorage.getItem("token");

function* getAllTiket() {
  try {
    const res = yield axios.get(`/api/ticket/support?offset=0&limit=10`, {
      headers: { Authorization: `${token}` },
    });
    yield put({
      type: types.GET_ALL_TIKET_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    yield put({
      type: types.GET_ALL_TIKET_FAIL,
      payload: error.response,
    });
  }
}

export function* watchAllTiket() {
  yield takeEvery(types.GET_ALL_TIKET_PENDING, getAllTiket);
}
