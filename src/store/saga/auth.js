import axios from "axios";
import * as types from "../types";
import { put, takeEvery } from "redux-saga/effects";

function* loginData(action) {
  try {
    const res = yield axios.post(`/api/authentication/login`, action.action);
    yield localStorage.setItem("token", res.data.data.token);
    yield put({
      type: types.LOGIN_SUCCESS,
      payload: res.data.data,
    });
  } catch (error) {
    console.log(error);
    yield put({
      type: types.LOGIN_FAIL,
      payload: error.response,
    });
  }
}

export function* watchLogin() {
    yield takeEvery(types.LOGIN_PENDING, loginData);
  }