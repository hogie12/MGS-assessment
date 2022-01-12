import { combineReducers } from "redux";
import Auth from "./auth";
import allTiket from "./tiket";
import createTicket from "./createTicket";

export default combineReducers({Auth, allTiket, createTicket});
