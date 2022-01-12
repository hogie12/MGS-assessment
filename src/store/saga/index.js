import { all } from "@redux-saga/core/effects";
import { watchLogin } from "./auth";
import { watchAllTiket, watchCreateTicket, watchAllType } from "./tiket";

export default function* rootSaga() {
  yield all([watchLogin(), watchAllTiket(), watchCreateTicket(), watchAllType]);
}
