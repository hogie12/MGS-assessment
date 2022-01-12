import * as types from "../types";

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: [],
};

const createTicket = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.CREATE_TICKET_PENDING:
      return {
        ...state,
        isLoading: true,
      };
    case types.CREATE_TICKET_SUCCESS:
      return {
        ...state,
        isSuccess: true,
        isLoading: false,
      };
    case types.CREATE_TICKET_FAIL:
      return {
        ...state,
        isError: true,
        isLoading: false,
        message: payload,
      };
    default:
      return state;
  }
};

export default createTicket;
