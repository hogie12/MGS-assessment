import * as types from "../types";

export const Login = (action) => {
    return {
      type: types.LOGIN_PENDING,
      action,
    };
};

export const getTiket = () => {
    return {
      type: types.GET_ALL_TIKET_PENDING
    };
};

export const getType = () => {
    return {
      type: types.GET_ALL_TYPE_PENDING
    };
};

export const createTicket = (action) =>{
  return {
    type: types.CREATE_TICKET_PENDING,
    action
  }
}

