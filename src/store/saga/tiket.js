import axios from "axios";
import * as types from "../types";
import { put, takeEvery, select } from "redux-saga/effects";

const auth = (state) => state.Auth;

function* getAllTiket() {
  const token = yield select(auth);
  console.log(token);
  try {
    const res = yield axios.get(`/api/ticket/support?offset=0&limit=10`, {
      headers: { Authorization: `${token.token}` },
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

function* createTicket(action) {
  const token = yield select(auth);
  try {
    const res = yield axios.post(`/api/ticket/createsupport`, action.action, {
      headers: { Authorization: `${token.token}` },
    });
    yield put({
      type: types.CREATE_TICKET_SUCCESS,
      payload: res.data,
    });
    console.error("Add ticket Success")
  } catch (error) {
    console.error("Add ticket Fail")
    yield put({
      type: types.CREATE_TICKET_FAIL,
      payload: error.response,
    });
  }
}

function* getAllType() {
  try {
    const res = yield axios.get(`/api/mastersupport/getdata`);
    yield put({
      type: types.GET_ALL_TYPE_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.GET_ALL_TYPE_FAIL,
      payload: error.response,
    });
  }
}

export function* watchAllTiket() {
  yield takeEvery(types.GET_ALL_TIKET_PENDING, getAllTiket);
}

export function* watchAllType() {
  yield takeEvery(types.GET_ALL_TYPE_PENDING, getAllType);
}

export function* watchCreateTicket() {
  yield takeEvery(types.CREATE_TICKET_PENDING, createTicket);
}
